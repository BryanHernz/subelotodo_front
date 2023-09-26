import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HowToSaleComponent } from './how-to-sale.component';

const routes: Routes = [
  { 
    path: '',
    component: HowToSaleComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HowToSaleRoutingModule { }
