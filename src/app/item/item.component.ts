import { Component, OnInit } from '@angular/core';
import { Item } from '../item';
import { StoryService } from '../story.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  item: Item;

  constructor(private storyService: StoryService) { }

  ngOnInit() {
    this.storyService.selectedItem$.subscribe(val => this.item = val);
  }

}
