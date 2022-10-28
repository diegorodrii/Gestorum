import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssignPageRoutingModule } from './assign-routing.module';

import { AssignPage } from './assign.page';
import { AssignmentComponent } from 'src/app/core/components/assignment/assignment.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AssignPageRoutingModule
  ],
  declarations: [AssignPage, AssignmentComponent,]
})
export class AssignPageModule {}
