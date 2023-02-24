import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { OrderAPIResponse, OrderUI } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class PageOrderList implements OnInit, OnDestroy {
  items: OrderAPIResponse[] = [];
  isLoading = false;
  hasError = false;
  private ngUnsubscribe: Subject<boolean> = new Subject<boolean>();
  
  constructor(
    private readonly orderService: OrderService,
    private readonly router: Router,
    private readonly sharedService: SharedService
    ) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.orderService.getOrders().pipe(
      takeUntil(this.ngUnsubscribe),
      catchError(err => {
        this.hasError = true;
        return of([]);
      })
    ).subscribe(res => {
      this.isLoading = false;
      if (!this.hasError) {
        this.items = res;
        this.saveOrders(res);
      }
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.unsubscribe();
}

  saveOrders(ordersApi: OrderAPIResponse[]): void {
    if (!ordersApi || (ordersApi.length) < 1) {
      return;
    }
  
    const ordersUI: OrderUI[] = this.sharedService.convertApiToUIOrders(ordersApi);
    this.sharedService.setOrders(ordersUI);
  }

  onCardClick(orderId: number): void {
    const url = `details/${orderId}`
    this.router.navigate([url]);
  }
}
