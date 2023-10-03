import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersCategoriesComponent } from './banners-categories.component';

const routes: Routes = [
  { 
    path: '',
    component: BannersCategoriesComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannersCategoriesRoutingModule { }
