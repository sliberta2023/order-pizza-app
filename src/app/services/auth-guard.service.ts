import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { SharedService } from "./shared.service";

@Injectable()
export class AuthGuardService implements CanActivate{
    constructor(
        private readonly auth: AuthService,
        private readonly router: Router,
        private readonly sharedService: SharedService
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if (!this.auth.isAuthenticated()) {
            this.router.navigate(['login']);
            this.sharedService.setLogoutButtonVisibility(false);
            return false;
        }

        this.sharedService.setLogoutButtonVisibility(true);
        return true;
    }
}
