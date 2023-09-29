import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Offers2Component } from './offers2.component';

const routes: Routes = [
  { 
    path: '',
    component: Offers2Component 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Offers2RoutingModule { }
