import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeletePostsSeeMoreComponent } from './delete-posts-see-more.component';
import { DeletePostsSeeMoreRoutingModule } from "./delete-posts-see-more-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    DeletePostsSeeMoreComponent,
    
  ],
  imports: [
    CommonModule,
    DeletePostsSeeMoreRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DeletePostsSeeMoreModule {
  constructor() {
    register();
  } 
}
