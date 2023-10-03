import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminNotificationsComponent } from './admin-notifications.component';
import { AdminNotificationsRoutingModule } from "./admin-notifications-routing.module";
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    AdminNotificationsComponent,
    
  ],
  imports: [
    CommonModule,
    AdminNotificationsRoutingModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AdminNotificationsModule {
  constructor() {
    register();
  } 
}
