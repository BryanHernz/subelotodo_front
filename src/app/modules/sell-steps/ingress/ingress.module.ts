import { NgModule } from "@angular/core";
import { IngressComponent } from "./ingress.component";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { IngressRoutingModule } from "./ingress-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      IngressComponent,
    ],
    imports: [
      CommonModule,
      IngressRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class IngressModule {
    constructor() {
      register();
    } 
  }