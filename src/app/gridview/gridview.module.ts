import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridviewRoutingModule } from './gridview-routing.module';
import { GridviewComponent } from './gridview.component';

@NgModule({
  declarations: [GridviewComponent],
  imports: [
    CommonModule,
    GridviewRoutingModule
  ]
})
export class GridviewModule { }
