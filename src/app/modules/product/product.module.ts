import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ProductRoutingModule } from "./product-routing.module";
import { SharedModule } from "../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    ProductComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    ProductRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
  
})
export class ProductModule {
    constructor() {
      register();
    } 
 }
