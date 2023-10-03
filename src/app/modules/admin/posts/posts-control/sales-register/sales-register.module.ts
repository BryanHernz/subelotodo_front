import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesRegisterComponent } from './sales-register.component';
import { SalesRegisterRoutingModule } from "./sales-register-routing.module";
import { SharedModule } from "../../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    SalesRegisterComponent,
  ],
  imports: [
    CommonModule,
    SalesRegisterRoutingModule,
    SharedModule,
    MatTableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SalesRegisterModule {
  constructor() {
    register();
  } 
}
