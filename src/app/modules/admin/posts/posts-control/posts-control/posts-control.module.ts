import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsControlComponent } from './posts-control.component';
import { PostsControlRoutingModule } from "./posts-control-routing.module";
import { SharedModule } from "../../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    PostsControlComponent,
  ],
  imports: [
    CommonModule,
    PostsControlRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsControlModule {
  constructor() {
    register();
  } 
}
