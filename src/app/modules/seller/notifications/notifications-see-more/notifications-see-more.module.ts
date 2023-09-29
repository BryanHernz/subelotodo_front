import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsSeeMoreComponent } from './notifications-see-more.component';
import { NotificationsSeeMoreRoutingModule } from "./notifications-see-more-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    NotificationsSeeMoreComponent,
    
  ],
  imports: [
    CommonModule,
    NotificationsSeeMoreRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class NotificationsSeeMoreModule {
  constructor() {
    register();
  } 
}
