import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsControlComponent } from './posts-control.component';

const routes: Routes = [
  { 
    path: '',
    component: PostsControlComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsControlRoutingModule { }
