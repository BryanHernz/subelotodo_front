import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPaymentsComponent } from './admin-payments.component';
import { AdminPaymentsRoutingModule } from "./admin-payments-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    AdminPaymentsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminPaymentsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminPaymentsModule {
  constructor() {
    register();
  } 
}
