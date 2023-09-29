import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectedSalesComponent } from './rejected-sales.component';

const routes: Routes = [
  { 
    path: '',
    component: RejectedSalesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedSalesRoutingModule { }
