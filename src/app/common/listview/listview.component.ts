import { Component, OnInit } from '@angular/core';
import { StoryService } from 'src/app/story.service';

@Component({
  selector: 'app-listview',
  templateUrl: './listview.component.html',
  styleUrls: ['./listview.component.scss']
})
export class ListviewComponent implements OnInit {
  storyIds;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.getStoryIds()
      .subscribe(res => this.storyIds = res);
  }

}
