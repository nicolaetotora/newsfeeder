import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListviewRoutingModule } from './listview-routing.module';
import { ListviewComponent } from './listview.component';

@NgModule({
  declarations: [ListviewComponent],
  imports: [
    CommonModule,
    ListviewRoutingModule
  ]
})
export class ListviewModule { }
