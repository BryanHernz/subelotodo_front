import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsFormComponent } from './posts-form.component';

const routes: Routes = [
  { 
    path: '',
    component: PostsFormComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsFormRoutingModule { }
