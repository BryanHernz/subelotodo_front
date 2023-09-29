import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeeMoreComponent } from './see-more.component';
import { SeeMoreRoutingModule } from "./see-more-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    SeeMoreComponent,
    
  ],
  imports: [
    CommonModule,
    SeeMoreRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SeeMoreModule {
  constructor() {
    register();
  } 
}
