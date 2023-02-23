import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLogin } from './components/page-login/page-login.component';
import { PageOrderCreate } from './components/page-order-create/order-create.component';
import { PageOrderDetails } from './components/page-order-details/page-order-details.component';
import { PageOrderList } from './components/page-order-list/order-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: PageLogin
  },
  {
    path: 'create',
    component: PageOrderCreate
  },
  {
    path: 'list',
    component: PageOrderList
  },
  {
    path: 'details/:id',
    component: PageOrderDetails,
  },
  {
    path: '*',
    component: PageLogin
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
