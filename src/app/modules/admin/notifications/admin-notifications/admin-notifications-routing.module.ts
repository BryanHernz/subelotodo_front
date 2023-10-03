import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNotificationsComponent } from './admin-notifications.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminNotificationsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminNotificationsRoutingModule { 
  
}
