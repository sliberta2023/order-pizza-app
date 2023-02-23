import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedComponentsModule } from './components/components.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { OrderService } from './services/order.service';
import { AuthGuardService } from './services/auth-guard.service';
import { SharedService } from './services/shared.service';

export function getToken() {
  console.log("Inside getToken...");
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: getToken
      }
    }),
    SharedComponentsModule
  ],
  providers: [AuthGuardService, AuthService, OrderService, SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
