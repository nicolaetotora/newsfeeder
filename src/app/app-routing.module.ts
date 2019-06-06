import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GridviewComponent } from './common/gridview/gridview.component';
import { ListviewComponent } from './common/listview/listview.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ItemComponent } from './common/item/item.component';

const routes: Routes = [
  { path: 'grid', component: GridviewComponent },
  { path: 'list', component: ListviewComponent },
  { path: 'detail/:id', component: ItemComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
