import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, debounceTime, of, Subject, takeUntil } from 'rxjs';
import { OrderUI } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class PageOrderList implements OnInit, OnDestroy {
  formControlSearch: FormControl = new FormControl('');
  items: OrderUI[] = [];
  filteredItems: OrderUI[] = [];
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
        const ordersUI: OrderUI[] = this.sharedService.convertApiToUIOrders(res);
        this.items = ordersUI;
        this.filteredItems = [...ordersUI];
        this.saveOrders(ordersUI);
      }
    });

    this.formControlSearch.valueChanges.pipe(
      takeUntil(this.ngUnsubscribe),
      debounceTime(500)
    ).subscribe(searchText => {
      console.log({searchText});
      this.filteredItems = this.items.filter(item => {
        const searchTextLowercase = searchText.toLowerCase();
        if ((item.crust.toLowerCase().indexOf(searchTextLowercase) > -1)
        || (item.flavor.toLowerCase().indexOf(searchTextLowercase) > -1)
        || (item.size.toLowerCase().indexOf(searchTextLowercase) > -1)
        ) {
          return true;
        }

        return false;
      });
    });
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.unsubscribe();
}

  saveOrders(ordersUI: OrderUI[]): void {
    if (!ordersUI || (ordersUI.length) < 1) {
      return;
    }
  
    
    this.sharedService.setOrders(ordersUI);
  }

  onCardClick(orderId: number): void {
    const url = `details/${orderId}`
    this.router.navigate([url]);
  }

  onCreateOrder(): void {
    this.router.navigate(['create']);
  }

  onSearch(event: any): void {
    console.log(event.target.value);
  }
}
