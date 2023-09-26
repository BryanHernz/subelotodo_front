import { NgModule } from "@angular/core";
import { InformComponent } from "./inform.component";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { InformRoutingModule } from "./inform-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      InformComponent,
    ],
    imports: [
      CommonModule,
      InformRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class InformModule {
    constructor() {
      register();
    } 
  }