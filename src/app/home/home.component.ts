import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  scrollPos: number = window.scrollY
  title = document.querySelector('h2')

  constructor() { }

  ngOnInit() {
    
  }

  addClassScroll(){
    this.title.classList.add('fade-in')
  }
  
  removeClassScroll(){
    this.title.classList.remove('fade-in')
  }
}
