import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { OrderApiRequest, OrderUI } from 'src/app/interfaces/order';
import { SelectOption } from 'src/app/interfaces/select-option';
import { TypeCrusts } from 'src/app/models/type-crusts';
import { TypeFlavors } from 'src/app/models/type-flavors';
import { TypeSizes } from 'src/app/models/type-sizes';
import { OrderService } from 'src/app/services/order.service';
import { SharedService } from 'src/app/services/shared.service';
import { DialogOrderSubmitComponent } from '../dialog-order-submit/dialog-order-submit.component';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.scss']
})
export class PageOrderCreate implements OnInit, OnDestroy {
  readonly TABLE_NO_MIN = 1;
  readonly TABLE_NO_MAX = 100;
  formGroup: FormGroup = new FormGroup({});
  formControlCrust: FormControl = new FormControl('', Validators.required);
  formControlFlavor: FormControl = new FormControl('', Validators.required);
  formControlSize: FormControl = new FormControl('', Validators.required);
  formControlTableNo: FormControl = new FormControl(
    1, [Validators.min(this.TABLE_NO_MIN), Validators.max(this.TABLE_NO_MAX)]
  );

  crusts: SelectOption[] = TypeCrusts;
  flavors: SelectOption[] = TypeFlavors;
  sizes: SelectOption[] = TypeSizes;

  isInProgress = false;
  hasApiError = false;
  hasUIError = false;
  submitedOrder!: OrderUI;

  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private readonly dialog: MatDialog,
    private readonly orderService: OrderService,
    private readonly router: Router,
    private readonly sharedService: SharedService) { }

  ngOnInit(): void {
    this.formGroup = new FormGroup({
      formControlCrust: this.formControlCrust,
      formControlFlavor: this.formControlFlavor,
      formControlSize: this.formControlSize,
      formControlTableNo: this.formControlTableNo
    });

  }

  ngOnDestroy(): void {
      this.ngUnsubscribe.next(true);
      this.ngUnsubscribe.unsubscribe();
  }

  onOrderCreate(): void {
    this.hasUIError = false;
    if (this.formGroup.invalid) {
      this.hasUIError = true;
      return;
    }
    this.hasApiError = false;
    this.isInProgress = true;
    const requestPayload: OrderApiRequest = {
      Crust: this.formControlCrust.value,
      Flavor: this.formControlFlavor.value,
      Size: this.formControlSize.value,
      Table_No: this.formControlTableNo.value
    };
    this.orderService.createOrder(requestPayload).pipe(
      takeUntil(this.ngUnsubscribe),
      catchError(error => {
        this.hasApiError = true;
        return of(null);
      })
    )
    .subscribe(res => {
      if (res) {
        this.submitedOrder = this.sharedService.convertApiToUIOrder(res);
        console.dir(this.submitedOrder);
        this.openDialog(this.submitedOrder);
      }
      this.isInProgress = false;
    });
  }

  openDialog(orderItem: OrderUI): void {
    const dialogRef: MatDialogRef<DialogOrderSubmitComponent> = this.dialog.open(DialogOrderSubmitComponent, {
      data: orderItem,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
    });

    dialogRef.componentInstance.getNextClickedEvent().subscribe(event => {
      if (event) {
        this.router.navigate(['list']);
        dialogRef.close();
      }
    });
  }

}
