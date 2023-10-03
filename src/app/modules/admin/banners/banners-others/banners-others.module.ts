import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersOthersComponent } from './banners-others.component';
import { BannersOthersRoutingModule } from "./banners-others-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SharedModule } from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    BannersOthersComponent,
    
  ],
  imports: [
    CommonModule,
    BannersOthersRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannersOthersModule {
  constructor() {
    register();
  } 
}
