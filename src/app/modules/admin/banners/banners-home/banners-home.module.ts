import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersHomeComponent } from './banners-home.component';
import { BannersHomeRoutingModule } from "./banners-home-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SharedModule } from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    BannersHomeComponent,
    
  ],
  imports: [
    CommonModule,
    BannersHomeRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannersHomeModule {
  constructor() {
    register();
  } 
}
