import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentsComponent } from './payments.component';
import { PaymentsRoutingModule } from "./payments-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    PaymentsComponent,
    
  ],
  imports: [
    CommonModule,
    PaymentsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PaymentsModule {
  constructor() {
    register();
  } 
}