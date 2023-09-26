import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RequestAlertComponent } from './request-alert.component';

const routes: Routes = [
  { 
    path: '',
    component: RequestAlertComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RequestAlertRoutingModule { }
