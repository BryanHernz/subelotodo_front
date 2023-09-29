import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellComponent } from './sell.component';
import { SellRoutingModule } from "./sell-routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    SellComponent,
    
  ],
  imports: [
    CommonModule,
    SellRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SellModule {
  constructor() {
    register();
  } 
}
