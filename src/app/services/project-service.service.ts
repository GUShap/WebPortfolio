import { Injectable } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
import { Project } from '../models/project';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})

export class ProjectService {
  lorem = new LoremIpsum({
   sentencesPerParagraph: {
     max: 8,
     min: 4
   },
   wordsPerSentence: {
     max: 16,
     min: 4
   }
  })

  constructor(private utils:UtilsService) { }

projectData:Project[]=[
  new Project('Stocks Dashboard',this.utils.setId(),'./assets/images/stock-dashboard.jpg',this.lorem.generateSentences(4),'https://gushap.github.io/Stocks-Dashboard-Angular/'),
  new Project('Tasker',this.utils.setId(),'./assets/images/tasker.jpg',this.lorem.generateSentences(4),'https://tasker-app-2021.herokuapp.com/#/board'),
  new Project('dragNote',this.utils.setId(),'./assets/images/dragNote.jpg',this.lorem.generateSentences(4),'https://gushap.github.io/DragNote-Angular/'),
  new Project('Packman!',this.utils.setId(),'./assets/images/packman.jpg',this.lorem.generateSentences(4),'https://gushap.github.io/Pacman/'),
  new Project('Take the Weather',this.utils.setId(),'./assets/images/weather.jpg',this.lorem.generateSentences(4),'https://gushap.github.io/Weather-App-Angular/')
];
}

