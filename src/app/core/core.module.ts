import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskDetailComponent } from './components/task-detail/task-detail.component';
import { TaskComponent } from './components/task/task.component';
import { UserComponent } from './components/user/user.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { AssignmentDetailsComponent } from './components/assigment-details/assigment-details.component';
import { AssignmentComponent } from './components/assignment/assignment.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AssignPage } from '../pages/assign/assign.page';
import { PeoplePage } from '../pages/people/people.page';
import { TasksPage } from '../pages/tasks/tasks.page';
import { ViewtasksPage } from '../pages/viewtasks/viewtasks.page';




@NgModule({
  declarations:[AssignPage,
  PeoplePage,
  TasksPage,
  ViewtasksPage,
  TaskDetailComponent,
  TaskComponent,
  UserComponent,
  UserDetailComponent,
  AssignmentDetailsComponent,
  AssignmentComponent],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
  ],
  exports:[
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    TaskDetailComponent,
    TaskComponent,
    UserComponent,
    UserDetailComponent,
    AssignmentDetailsComponent,
    AssignmentComponent
  ]
})
export class CoreModule { }
