import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotificationsSeeMoreComponent } from './notifications-see-more.component';

const routes: Routes = [
  { 
    path: '',
    component: NotificationsSeeMoreComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotificationsSeeMoreRoutingModule { 
  
}
