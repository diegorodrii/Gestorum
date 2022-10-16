import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { TaskComponent } from 'src/app/components/task/task.component';
import { TaskDetailComponent } from 'src/app/components/task-detail/task-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [TasksPage, TaskComponent,TaskDetailComponent]
})
export class TasksPageModule {}
