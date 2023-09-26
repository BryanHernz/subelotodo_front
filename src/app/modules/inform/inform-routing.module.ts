import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InformComponent } from './inform.component';

const routes: Routes = [
  { 
    path: '',
    component: InformComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InformRoutingModule { }
