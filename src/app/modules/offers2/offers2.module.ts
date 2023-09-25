import { NgModule } from "@angular/core";
import { Offers2Component } from "./offers2.component";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { Offers2RoutingModule } from "./offers2-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      Offers2Component,
    ],
    imports: [
      CommonModule,
      Offers2RoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class Offers2Module {
    constructor() {
      register();
    } 
  }