import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPaymentsComponent } from './admin-payments.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminPaymentsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPaymentsRoutingModule { 
  
}
