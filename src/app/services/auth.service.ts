import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { AuthTokenApiResponse } from "../interfaces/token";
import { environment } from "../../environments/environment";
import { Observable } from "rxjs";
import { JwtHelperService } from "@auth0/angular-jwt";

const API = environment && environment.API ? environment.API
            : 'https://pizza-api-app.herokuapp.com/api';

@Injectable()
export class AuthService {
    constructor(
        private readonly httpClient: HttpClient,
        private readonly jwtHelper: JwtHelperService
    ) {}

    getToken(username: string, password: string): Observable<AuthTokenApiResponse> {
        const body = {
            username,
            password
        };
        const headers = new HttpHeaders()
            .set('content-type', 'application/json')
            .set('accept', 'application/json');
        
        return this.httpClient.post<AuthTokenApiResponse>(`${API}/auth`, body, {headers});
    }

    isAuthenticated(): boolean {
        const token = localStorage.getItem('token');
        
        return !this.jwtHelper.isTokenExpired(token);
    }
}
