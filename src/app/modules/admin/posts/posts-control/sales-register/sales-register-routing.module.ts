import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesRegisterComponent } from './sales-register.component';

const routes: Routes = [
  { 
    path: '',
    component: SalesRegisterComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRegisterRoutingModule { }
