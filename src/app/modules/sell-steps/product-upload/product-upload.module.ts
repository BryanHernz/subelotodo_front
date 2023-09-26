import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { ProductUploadRoutingModule } from "./product-upload-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductUploadComponent } from "./product-upload.component";

@NgModule({
    declarations: [
      ProductUploadComponent,
    ],
    imports: [
      CommonModule,
      ProductUploadRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class ProductUploadModule {
    constructor() {
      register();
    } 
  }