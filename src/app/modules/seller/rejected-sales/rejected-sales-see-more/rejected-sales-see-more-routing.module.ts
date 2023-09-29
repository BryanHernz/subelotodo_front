import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RejectedSalesSeeMoreComponent } from './rejected-sales-see-more.component';

const routes: Routes = [
  { 
    path: '',
    component: RejectedSalesSeeMoreComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RejectedSalesSeeMoreRoutingModule { }
