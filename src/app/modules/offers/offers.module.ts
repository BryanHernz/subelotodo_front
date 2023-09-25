import { NgModule } from "@angular/core";
import { OffersComponent } from "./offers.component";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { OffersRoutingModule } from "./offers-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      OffersComponent,
    ],
    imports: [
      CommonModule,
      OffersRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class OffersModule {
    constructor() {
      register();
    } 
  }