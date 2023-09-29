import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedSalesSeeMoreComponent } from './completed-sales-see-more.component';

const routes: Routes = [
  { 
    path: '',
    component: CompletedSalesSeeMoreComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompletedSalesSeeMoreRoutingModule { }
