import { NgModule } from '@angular/core';


import { PeoplePageRoutingModule } from './people-routing.module';


import { CoreModule } from 'src/app/core/core.module';

@NgModule({
  imports: [
    PeoplePageRoutingModule,
    CoreModule,
  ],
  declarations: []
})
export class PeoplePageModule {}
