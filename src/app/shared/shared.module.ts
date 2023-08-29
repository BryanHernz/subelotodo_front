import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from '../shared/footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { NumericInputComponent } from './components/numeric-input/numeric-input.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FooterComponent,
    BreadcrumbComponent,
    NumericInputComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    FormsModule
    
  ],
  exports: [
    FooterComponent,
    BreadcrumbComponent,
    NumericInputComponent
  ],
})
export class SharedModule { }

