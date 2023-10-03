import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetricsComponent } from './metrics.component';
import { MetricsRoutingModule } from "./metrics-routing.module";
import { SharedModule } from "../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    MetricsComponent,
  ],
  imports: [
    CommonModule,
    MetricsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MetricsModule {
  constructor() {
    register();
  } 
}
