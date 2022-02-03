import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
emailAddress:string = 'shapira91@gmail.com'
  constructor() { }

  ngOnInit(): void {
  }

}
