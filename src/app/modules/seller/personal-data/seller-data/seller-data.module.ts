import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerDataComponent } from './seller-data.component';
import { SellerDataRoutingModule } from "./seller-data-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    SellerDataComponent,
    
  ],
  imports: [
    CommonModule,
    SellerDataRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SellerDataModule {
  constructor() {
    register();
  } 
}
