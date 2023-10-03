import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminFrequentQuestionsComponent } from './admin-frequent-questions.component';

const routes: Routes = [
  { 
    path: '',
    component: AdminFrequentQuestionsComponent 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminFrequentQuestionsRoutingModule { }
