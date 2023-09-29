import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompletedSalesSeeMoreComponent } from './completed-sales-see-more.component';
import { CompletedSalesSeeMoreRoutingModule } from "./completed-sales-see-more-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    CompletedSalesSeeMoreComponent,
    
  ],
  imports: [
    CommonModule,
    CompletedSalesSeeMoreRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CompletedSalesSeeMoreModule {
  constructor() {
    register();
  } 
}
