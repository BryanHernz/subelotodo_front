import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsValidateComponent } from './posts-validate.component';
import { PostsValidateRoutingModule } from "./posts-validate-routing.module";
import { SharedModule } from "../../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    PostsValidateComponent,
  ],
  imports: [
    CommonModule,
    PostsValidateRoutingModule,
    SharedModule,
    MatTableModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsValidateModule {
  constructor() {
    register();
  } 
}
