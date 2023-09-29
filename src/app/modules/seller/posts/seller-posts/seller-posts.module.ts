import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SellerPostsComponent } from './seller-posts.component';
import { SellerPostsRoutingModule } from "./seller-posts-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    SellerPostsComponent,
    
  ],
  imports: [
    CommonModule,
    SellerPostsRoutingModule,
    SharedModule,
    MatCheckboxModule,
    FormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SellerPostsModule {
  constructor() {
    register();
  } 
}
