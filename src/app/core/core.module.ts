import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav/nav.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    IonicModule.forRoot()
    
  ],
  exports: [
    NavComponent
  ],
})
export class CoreModule { }

