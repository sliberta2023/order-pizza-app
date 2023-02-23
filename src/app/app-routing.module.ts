import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLogin } from './components/page-login/page-login.component';
import { PageOrderCreate } from './components/page-order-create/order-create.component';
import { PageOrderDetails } from './components/page-order-details/page-order-details.component';
import { PageOrderList } from './components/page-order-list/order-list.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: PageOrderList,
    canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    component: PageLogin
  },
  {
    path: 'create',
    component: PageOrderCreate,
    canActivate: [AuthGuardService]
  },
  {
    path: 'list',
    component: PageOrderList,
    canActivate: [AuthGuardService]
  },
  {
    path: 'details/:id',
    component: PageOrderDetails,
    canActivate: [AuthGuardService]
  },
  {
    path: '**',
    redirectTo: 'list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
