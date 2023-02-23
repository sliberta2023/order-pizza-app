import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { OrderAPIResponse } from "../interfaces/order";
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
}