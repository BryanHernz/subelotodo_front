import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { ProductRegisterRoutingModule } from "./product-register-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductRegisterComponent } from "./product-register.component";
import { MatInputModule } from "@angular/material/input"

@NgModule({
    declarations: [
      ProductRegisterComponent,
    ],
    imports: [
      CommonModule,
      ProductRegisterRoutingModule,
      SharedModule,
      MatInputModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class ProductRegisterModule {
    constructor() {
      register();
    } 
  }