import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedSalesComponent } from './completed-sales.component';

const routes: Routes = [
  { 
    path: '',
    component: CompletedSalesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedSalesRoutingModule { }
