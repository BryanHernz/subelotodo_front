import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';

const routes: Routes = [
  { 
    path: '',
    component: ProductComponent 
  },
  // {
  //   path: 'products/detail/:id', // Esta ruta coincide con la ruta de detalle de productos en el módulo products
  //   loadChildren: () => import('../products/product-detail/product-detail.module').then(m => m.ProductDetailModule)
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
