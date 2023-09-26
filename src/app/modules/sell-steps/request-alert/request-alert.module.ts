import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { RequestAlertRoutingModule } from "./request-alert-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RequestAlertComponent } from "./request-alert.component";

@NgModule({
    declarations: [
      RequestAlertComponent,
    ],
    imports: [
      CommonModule,
      RequestAlertRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class RequestAlertModule {
    constructor() {
      register();
    } 
  }