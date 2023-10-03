import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersCategoriesComponent } from './banners-categories.component';
import { BannersCategoriesRoutingModule } from "./banners-categories-routing.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { SharedModule } from "../../../../shared/shared.module";


@NgModule({
  declarations: [
    BannersCategoriesComponent,
  ],
  imports: [
    CommonModule,
    BannersCategoriesRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannersCategoriesModule {
  constructor() {
    register();
  } 
}
