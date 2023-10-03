import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BannersOthersComponent } from './banners-others.component';

const routes: Routes = [
  { 
    path: '',
    component: BannersOthersComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BannersOthersRoutingModule { }
