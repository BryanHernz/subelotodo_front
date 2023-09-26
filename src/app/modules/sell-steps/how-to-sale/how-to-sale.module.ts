import { NgModule } from "@angular/core";
import { HowToSaleComponent } from "./how-to-sale.component";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { HowToSaleRoutingModule } from "./how-to-sale-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      HowToSaleComponent,
    ],
    imports: [
      CommonModule,
      HowToSaleRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class HowToSaleModule {
    constructor() {
      register();
    } 
  }