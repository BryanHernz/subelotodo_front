import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RejectedSalesComponent } from './rejected-sales.component';
import { RejectedSalesRoutingModule } from "./rejected-sales-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    RejectedSalesComponent,
  ],
  imports: [
    CommonModule,
    RejectedSalesRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RejectedSalesModule {
  constructor() {
    register();
  } 
}
