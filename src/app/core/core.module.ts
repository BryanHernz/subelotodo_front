import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    NavComponent,
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    SharedModule,
    MatMenuModule,

  ],
  exports: [
    NavComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CoreModule { }

