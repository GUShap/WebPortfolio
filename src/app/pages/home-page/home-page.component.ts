import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/models/project';
import { ProjectService} from 'src/app/services/project-service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

projects:Project[]
emailAddress: 'shapira91@gmail.com'
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.projectData
  }

}
