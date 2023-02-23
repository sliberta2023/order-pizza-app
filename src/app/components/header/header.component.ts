import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  isLogoutButtonVisible$ = this.sharedService.isLogoutButtonVisible();

  constructor(
    private readonly router: Router,
    private readonly sharedService: SharedService  
  ) { }

  ngOnInit(): void {
  }

  onClick(): void {
    this.resetLocalStorage();
    this.router.navigate(['login']);
    this.sharedService.setLogoutButtonVisibility(false);
  }

  resetLocalStorage(): void {
    localStorage.removeItem('token');
  }

}
