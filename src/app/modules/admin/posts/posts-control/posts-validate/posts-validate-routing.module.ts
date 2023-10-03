import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsValidateComponent } from './posts-validate.component';

const routes: Routes = [
  { 
    path: '',
    component: PostsValidateComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsValidateRoutingModule { }
