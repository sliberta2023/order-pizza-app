import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable()
export class SharedService {
    showLogoutButton$ = new Subject<boolean>();

    isLogoutButtonVisible(): Observable<boolean> {
        return this.showLogoutButton$.asObservable();
    }

    setLogoutButtonVisibility(value: boolean): void {
        this.showLogoutButton$.next(value);
    }
}
