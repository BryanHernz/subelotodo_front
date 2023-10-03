import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDataComponent } from './admin-data.component';
import { AdminDataRoutingModule } from "./admin-data-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    AdminDataComponent,
    
  ],
  imports: [
    CommonModule,
    AdminDataRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminDataModule {
  constructor() {
    register();
  } 
}
