import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap, combineAll, toArray } from 'rxjs/operators';
import { Item } from 'src/app/item';
import { StoryService } from 'src/app/story.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  stories$: Observable<Item[]>;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.stories$ = this.storyService.getStoryIds().pipe(
      switchMap((ids: number[]) => this.storyService.getStoryDetails(ids.slice(0, 25))),
      toArray()
    );
  }
}
