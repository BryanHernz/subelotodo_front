import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAdminDataComponent } from './edit-admin-data.component';
import { SharedModule } from "../../../../shared/shared.module";
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';


@NgModule({
  declarations: [
    EditAdminDataComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class EditAdminDataModule {
  constructor() {
    register();
  } 
}
