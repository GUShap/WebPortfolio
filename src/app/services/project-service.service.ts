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
  {name:'Stocks Dashboard',
    id:this.utils.setId(),
    imgUrl:'./assets/images/stock-dashboard.jpg',
    description:'My first "Big" Angular project, inspired by task from Coding Academy. You will be able to set a portfolio of stocks you wish to follow, using restAPI with data from AlphaVentage and including much of angular abilities, like: RxJS, HTTPClient, angular-material and much more',
    link:'https://gushap.github.io/Stocks-Dashboard-Angular/'
  },
  {
    name: 'Tasker',
    id:this.utils.setId(),
    imgUrl: './assets/images/tasker.jpg',
    description:'The Final Project in my training at Coding Academy. A "Monday" like app for managing projects and teams. My first time working as a team and i enjoyed every moment of it',
    link: 'https://tasker-app-2021.herokuapp.com/#/board'
  },
  {
    name: 'dragNote',
    id:this.utils.setId(),
    imgUrl: './assets/images/dragNote.jpg',
    description:'Discovering my passion to Angular framework and experimenting with some of what it can offer, in this case mainly BEAUTIFUL DRAG&DROP.',
    link:'https://gushap.github.io/DragNote-Angular/'
  },
  {
    name:'Packman!',
    id: this.utils.setId(),
    imgUrl:'./assets/images/packman.jpg',
    description:'The good old yellow circled friend, given as a task at the very beginning. Very nostalgic and shows one of the first "serious" css styling i made.',
    link:'https://gushap.github.io/Pacman/'
  },
  {
    name:'Take the Weather',
    id: this.utils.setId(),
    imgUrl:'./assets/images/weather.jpg',
    description:'A weather app, that very basically shows to forecast for the next few days in any place the user inputs. Using restAPI with data from AccuWeather',
    link:'https://gushap.github.io/Weather-App-Angular/'
  },
];
}

