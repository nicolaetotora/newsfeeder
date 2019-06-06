import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridviewComponent } from './common/gridview/gridview.component';
import { ListviewComponent } from './common/listview/listview.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { ItemComponent } from './common/item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    GridviewComponent,
    PageNotFoundComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
