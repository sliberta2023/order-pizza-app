import { NgModule } from "@angular/core";
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageOrderList } from './page-order-list/order-list.component';
import { PageOrderCreate } from './page-order-create/order-create.component';
import { PageLogin } from './page-login/page-login.component';
import { CommonModule } from "@angular/common";
import { SharedMaterialsModule } from "../materials.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PageOrderDetails } from './page-order-details/page-order-details.component';
import { DialogOrderSubmitComponent } from './dialog-order-submit/dialog-order-submit.component';
import { DialogOrderDeleteComponent } from './dialog-order-delete/dialog-order-delete.component';

const components = [
    FooterComponent,
    HeaderComponent,
    PageLogin,
    PageOrderCreate,
    PageOrderDetails,
    PageOrderList
];

@NgModule({
  declarations: [
    ...components,
    DialogOrderSubmitComponent,
    DialogOrderDeleteComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedMaterialsModule
  ],
  exports: [...components]
})
export class SharedComponentsModule {}
