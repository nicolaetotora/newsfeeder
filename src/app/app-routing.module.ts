import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'grid',
    loadChildren: './gridview/gridview.module#GridviewModule'
  },
  {
    path: 'list',
    loadChildren: './listview/listview.module#ListviewModule'
  },
  {
    path: 'detail/:id',
    loadChildren: './item/item.module#ItemModule'
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
