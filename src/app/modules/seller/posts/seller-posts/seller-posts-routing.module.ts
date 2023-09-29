import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SellerPostsComponent } from './seller-posts.component';

const routes: Routes = [
  { 
    path: '',
    component: SellerPostsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerPostsRoutingModule { }
