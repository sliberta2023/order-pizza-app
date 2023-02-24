import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { OrderApiRequest, OrderAPIResponse } from "../interfaces/order";
import { environment } from "../../environments/environment";

const API = environment && environment.API ? environment.API
            : 'https://pizza-api-app.herokuapp.com/api';

@Injectable()
export class OrderService {
    constructor(private readonly httpClient: HttpClient) {}

    getOrders(): Observable<OrderAPIResponse[]> {
        const url = `${API}/orders`;

        return this.httpClient.get<OrderAPIResponse[]>(url);
    }

    createOrder(requestPayload: OrderApiRequest): Observable<OrderAPIResponse> {
        const url = `${API}/orders`;

        return this.httpClient.post<OrderAPIResponse>(url, requestPayload);
    }

    deleteOrder(orderId: number): Observable<boolean> {
        const url = `${API}/orders/${orderId}`;
        return this.httpClient.delete<boolean>(url);
    }
}