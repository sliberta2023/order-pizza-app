import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";
import { OrderAPIResponse, OrderUI } from "../interfaces/order";

@Injectable()
export class SharedService {
    orders: OrderUI[] = [];
    showLogoutButton$ = new Subject<boolean>();

    isLogoutButtonVisible(): Observable<boolean> {
        return this.showLogoutButton$.asObservable();
    }

    setLogoutButtonVisibility(value: boolean): void {
        this.showLogoutButton$.next(value);
    }

    getOrders(): OrderUI[] {
        return this.orders;
    }

    setOrders(orders: OrderUI[]): void {
        this.orders = orders;
    }

    convertApiToUIOrder(orderApi: OrderAPIResponse): OrderUI {
        return {
            crust: orderApi.Crust,
            flavor: orderApi.Flavor,
            orderId: orderApi.Order_ID,
            size: orderApi.Size,
            tableNo: orderApi.Table_No,
            timestamp: orderApi.Timestamp
        }
    }

    convertApiToUIOrders(ordersApi: OrderAPIResponse[]): OrderUI[] {
        return ordersApi.map(orderApi => {
            return this.convertApiToUIOrder(orderApi);
        });
    } 
}
