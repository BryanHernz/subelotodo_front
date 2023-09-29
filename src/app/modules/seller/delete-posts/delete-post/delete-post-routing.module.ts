import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletePostComponent } from './delete-post.component';

const routes: Routes = [
  { 
    path: '',
    component: DeletePostComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletePostRoutingModule { }
