import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewtasksPageRoutingModule } from './viewtasks-routing.module';

import { ViewtasksPage } from './viewtasks.page';
import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [

    ViewtasksPageRoutingModule,
    CoreModule
  ],
  declarations: []
})
export class ViewtasksPageModule {}
