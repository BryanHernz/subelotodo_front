import { NgModule } from "@angular/core";
import { QuestionComponent } from "./question.component";
import { CommonModule } from "@angular/common";
import { register } from "swiper/element";
import { QuestionRoutingModule } from "./question-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
    declarations: [
      QuestionComponent,
    ],
    imports: [
      CommonModule,
      QuestionRoutingModule,
      SharedModule,
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
  })
  export class QuestionModule {
    constructor() {
      register();
    } 
  }