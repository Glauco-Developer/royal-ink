import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.sass']
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      let preloader = document.getElementById('preloader')
      preloader.classList.add('hide')
    }, 2000)
  }

}
