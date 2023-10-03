import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersHomeComponent } from './banners-home.component';

const routes: Routes = [
  { 
    path: '',
    component: BannersHomeComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannersHomeRoutingModule { }
