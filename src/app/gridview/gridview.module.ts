import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { GridviewRoutingModule } from './gridview-routing.module';
import { GridviewComponent } from './gridview.component';

@NgModule({
  declarations: [GridviewComponent],
  imports: [
    GridviewRoutingModule,
    SharedModule
  ]
})
export class GridviewModule { }
