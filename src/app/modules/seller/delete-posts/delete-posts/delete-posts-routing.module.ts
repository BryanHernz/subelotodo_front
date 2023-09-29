import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletePostsComponent } from './delete-posts.component';

const routes: Routes = [
  { 
    path: '',
    component: DeletePostsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletePostsRoutingModule { }
