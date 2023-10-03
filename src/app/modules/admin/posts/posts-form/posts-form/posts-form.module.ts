import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsFormComponent } from './posts-form.component';
import { PostsFormRoutingModule } from "./posts-form-routing.module";
import { SharedModule } from "../../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    PostsFormComponent,
  ],
  imports: [
    CommonModule,
    PostsFormRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsFormModule {
  constructor() {
    register();
  } 
}
