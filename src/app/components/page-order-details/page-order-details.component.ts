import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { OrderUI } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-page-order-details',
  templateUrl: './page-order-details.component.html',
  styleUrls: ['./page-order-details.component.scss']
})
export class PageOrderDetails implements OnInit, OnDestroy {
  hasError = false;
  isLoading = false;
  orderItem!: OrderUI | undefined;

  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();

  constructor(
    private readonly orderService: OrderService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly sharedService: SharedService
  ) { }

  ngOnInit(): void {
    const orderId = Number(this.route.snapshot.paramMap.get('orderId'));
    if (orderId) {
      const orders = this.sharedService.getOrders();
      this.orderItem = orders.find(item => item.orderId === orderId);
    }
  }

  ngOnDestroy(): void {
      this.ngUnsubscribe.next(true);
      this.ngUnsubscribe.unsubscribe();
  }

  onDelete(orderId: number): void {
    if(!orderId) {
      return;
    }

    this.hasError = false;
    this.isLoading = true;
    this.orderService.deleteOrder(orderId).pipe(
      takeUntil(this.ngUnsubscribe),
      catchError(err => {
        this.hasError = true;
        return of(false);
      })
    ).subscribe(() => {
      this.isLoading = false;
      this.router.navigate(['list']);
    });
  }

  onClickToListPage(): void {
    this.router.navigate(['list']);
  }

}
