import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditSellerDataComponent } from './edit-seller-data.component';

const routes: Routes = [
  { 
    path: '',
    component: EditSellerDataComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditSellerDataRoutingModule { }
