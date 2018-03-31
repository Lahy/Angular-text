import { Injectable } from '@angular/core';

import { story } from './story';
import { STORY } from './mock-story';

@Injectable()
export class StoryService {
    getStory(): story[] {
      return STORY;
    }

  constructor() { }

}
