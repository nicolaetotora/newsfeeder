import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'grid',
    loadChildren: () => import('./gridview/gridview.module').then(mod => mod.GridviewModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./listview/listview.module').then(mod => mod.ListviewModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./item/item.module').then(mod => mod.ItemModule)
  },
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
