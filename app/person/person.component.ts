import { Component, OnInit } from '@angular/core';
import { story } from '../story';

import { StoryService } from '../story.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  story: story[];

  constructor(private StoryService: StoryService) { }

  ngOnInit() {
    
  }

}
