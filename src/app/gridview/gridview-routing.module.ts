import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GridviewComponent } from './gridview.component';

const routes: Routes = [
  {
    path: '',
    component: GridviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GridviewRoutingModule { }
