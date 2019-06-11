import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { ListviewRoutingModule } from './listview-routing.module';
import { ListviewComponent } from './listview.component';

@NgModule({
  declarations: [ListviewComponent],
  imports: [
    ListviewRoutingModule,
    SharedModule
  ]
})
export class ListviewModule { }
