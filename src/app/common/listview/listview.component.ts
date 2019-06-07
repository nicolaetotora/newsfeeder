import { Component, OnInit } from '@angular/core';
import { mergeMap } from 'rxjs/operators';
import { Item } from 'src/app/item';
import { StoryService } from 'src/app/story.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  stories$: Item[] = [];

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getStoryIds().pipe(
      mergeMap((ids: number[]) => this.storyService.getStoryDetails(ids.slice(0, 25)))
    ).subscribe(item => this.stories$.push(item));
  }
}
