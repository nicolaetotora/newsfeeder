import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { DaysAgoPipe } from '../days-ago.pipe';
import { HostnameExtractorPipe } from '../hostname-extractor.pipe';

@NgModule({
  declarations: [DaysAgoPipe, HostnameExtractorPipe],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatTabsModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDividerModule,
    DaysAgoPipe,
    HostnameExtractorPipe
  ]
})
export class SharedModule { }
