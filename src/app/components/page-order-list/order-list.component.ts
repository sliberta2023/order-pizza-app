import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, of, Subject, takeUntil } from 'rxjs';
import { OrderAPIResponse } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class PageOrderList implements OnInit {
  items: OrderAPIResponse[] = [];
  isLoading = false;
  hasError = false;
  private ngUnsubscribe = new Subject();
  
  constructor(
    private readonly orderService: OrderService,
    private readonly router: Router
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
        console.dir(res);
      }
    });
  }

  onCardClick(orderId: number): void {
    const url = `details/${orderId}`
    this.router.navigate([url]);
  }
}
