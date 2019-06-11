import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, toArray } from 'rxjs/operators';

import { Item } from '../item';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-gridview',
  templateUrl: './gridview.component.html',
  styleUrls: ['./gridview.component.scss']
})
export class GridviewComponent implements OnInit {
  stories$: Observable<Item[]>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.stories$ = this.storyService.getStoryIds().pipe(
      switchMap((ids: number[]) => this.storyService.getStoryDetails(ids.slice(0, 25))),
      toArray()
    );
  }

}
