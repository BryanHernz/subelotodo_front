import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePostComponent } from './delete-post.component';
import { DeletePostRoutingModule } from "./delete-post-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    DeletePostComponent,
    
  ],
  imports: [
    CommonModule,
    DeletePostRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeletePostModule {
  constructor() {
    register();
  } 
}
