import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductUploadComponent } from './product-upload.component';

const routes: Routes = [
  { 
    path: '',
    component: ProductUploadComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ProductUploadRoutingModule { }
