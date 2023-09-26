import { NgModule } from "@angular/core";
import { FrequentQuestionsComponent } from "./frequent-questions.component";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { FrequentQuestionsRoutingModule } from "./frequent-questions-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      FrequentQuestionsComponent,
    ],
    imports: [
      CommonModule,
      FrequentQuestionsRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class FrequentQuestionsModule {
    constructor() {
      register();
    } 
  }