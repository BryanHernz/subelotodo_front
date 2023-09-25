import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterLink } from '@angular/router';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  exports: [
    NavComponent
  ],
})
export class CoreModule { }

