import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AssignPage } from './assign.page';

const routes: Routes = [
  {
    path: '',
    component: AssignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),ReactiveFormsModule],
  exports: [RouterModule],
})
export class AssignPageRoutingModule {}
