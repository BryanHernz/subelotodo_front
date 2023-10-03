import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './posts.component';
import { PostsRoutingModule } from "./posts-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    PostsComponent,
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostsModule {
  constructor() {
    register();
  } 
}
