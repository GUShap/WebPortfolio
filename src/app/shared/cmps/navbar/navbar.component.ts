import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  parent = document.querySelector('app-navbar')
  nav: Element
  navLinks
  constructor() { }

  ngOnInit(): void {
    this.nav = this.parent.querySelector('.header')
    this.navLinks = this.parent.querySelectorAll('.nav-link')
    
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => { 
        this.nav.classList.remove('nav-open')
      })
    })
  }

  toggleNav() {
    this.nav.classList.toggle('nav-open')
  }

}
