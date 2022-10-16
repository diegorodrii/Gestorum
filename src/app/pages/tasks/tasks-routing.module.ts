import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: '',
    component: TasksPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ReactiveFormsModule],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
