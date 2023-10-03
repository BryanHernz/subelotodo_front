import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellersComponent } from './sellers.component';
import { SellersRoutingModule } from "./sellers-routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    SellersComponent,
  ],
  imports: [
    CommonModule,
    SellersRoutingModule,
    SharedModule,
    MatTableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SellersModule {
  constructor() {
    register();
  } 
}
