import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminFrequentQuestionsComponent } from './admin-frequent-questions.component';
import { AdminFrequentQuestionsRoutingModule } from "./admin-frequent-questions-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    AdminFrequentQuestionsComponent,
  ],
  imports: [
    CommonModule,
    AdminFrequentQuestionsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminFrequentQuestionsModule {
  constructor() {
    register();
  } 
}
