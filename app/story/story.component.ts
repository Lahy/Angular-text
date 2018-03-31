import { Component, OnInit } from '@angular/core';
import { story }  from '../story';

import { STORY } from '../mock-story';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  //story = 'Lost Love';
  // story:Story = {
  //   id: 1,
  //   name: 'Lost Love',
  // };
  story = STORY;

  constructor() { }

  ngOnInit() {
  }

}
