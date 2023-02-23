import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError, map, of, Subject, takeUntil } from 'rxjs';
import { AuthToken } from '../../interfaces/token';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.scss']
})
export class PageLogin implements OnInit, OnDestroy {
  formGroup: FormGroup = new FormGroup({});
  inputControlPassword = new FormControl('', Validators.required);
  inputControlUsername = new FormControl('', Validators.required);
  isChecking = false;
  hasError = false; 

  private ngUnsubscribe = new Subject();

  constructor(private readonly authService: AuthService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      inputControlUsername: this.inputControlUsername,
      inputControlPassword: this.inputControlPassword
    });
  }

  ngOnDestroy(): void {
      this.ngUnsubscribe.complete();
  }

  onLogin() {
    const {inputControlUsername, inputControlPassword} = this.formGroup.value;
    this.isChecking = true;
    this.hasError = false;
    this.authService.getToken(inputControlUsername, inputControlPassword).pipe(
      takeUntil(this.ngUnsubscribe),
      map(res => { return {accessToken: res.access_token}}),
      catchError(error => {
        this.hasError = true;
        return of({accessToken: ''});
      })
    ).subscribe((res: AuthToken) => {
      this.isChecking = false;
      if (!this.hasError) {
        this.saveToken(res.accessToken);
      }
    });
  }

  saveToken(token: string): void {
    localStorage.setItem('token', token);
  }

}
