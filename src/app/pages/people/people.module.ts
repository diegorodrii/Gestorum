import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PeoplePageRoutingModule } from './people-routing.module';

import { PeoplePage } from './people.page';
import { UserComponent } from '../../../../src/app/core/components/user/user.component';
import { UserDetailComponent } from 'src/app/core/components/user-detail/user-detail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PeoplePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [PeoplePage, UserComponent,UserDetailComponent]
})
export class PeoplePageModule {}
