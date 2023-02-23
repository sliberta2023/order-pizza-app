import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageOrderList } from './page-order-list/order-list.component';
import { PageOrderCreate } from './page-order-create/order-create.component';
import { PageLogin } from './page-login/page-login.component';
import { CommonModule } from "@angular/common";

const components = [
    FooterComponent,
    HeaderComponent,
    PageLogin,
    PageOrderCreate,
    PageOrderList
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [CommonModule],
  exports: [...components]
})
export class SharedComponentsModule {}
