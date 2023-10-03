import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannersComponent } from './banners.component';
import { BannersRoutingModule } from "./banners-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { BannersCategoriesComponent } from '../banners-categories/banners-categories.component';
import { BannersOthersComponent } from '../banners-others/banners-others.component';


@NgModule({
  declarations: [
    BannersComponent,
  ],
  imports: [
    CommonModule,
    BannersRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BannersModule {
  constructor() {
    register();
  } 
}
