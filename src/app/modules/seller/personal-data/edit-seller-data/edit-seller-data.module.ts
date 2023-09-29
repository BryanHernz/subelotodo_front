import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditSellerDataComponent } from './edit-seller-data.component';
import { EditSellerDataRoutingModule } from "./edit-seller-data-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    EditSellerDataComponent,
  ],
  imports: [
    CommonModule,
    EditSellerDataRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditSellerDataModule {
  constructor() {
    register();
  } 
}
