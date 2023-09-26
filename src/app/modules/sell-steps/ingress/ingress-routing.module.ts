import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngressComponent } from './ingress.component';

const routes: Routes = [
  { 
    path: '',
    component: IngressComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class IngressRoutingModule { }
