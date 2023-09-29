import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeletePostsSeeMoreComponent } from './delete-posts-see-more.component';

const routes: Routes = [
  { 
    path: '',
    component: DeletePostsSeeMoreComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeletePostsSeeMoreRoutingModule { 
  
}
