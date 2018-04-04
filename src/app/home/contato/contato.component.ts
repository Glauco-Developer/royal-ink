import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.sass']
})
export class ContatoComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = -29.988120
  lng: number = -50.137303
  
  marker: string = '../../assets/images/tattomap.png';
  elementType:'all';
  styles = [{
    "stylers": [
      {
        "saturation": -500
      },
      {
        "hue": 180
      },
      {
        "lightness": 0
      },
      {
        "gamma": 0
      },
    ]
  }
];

  constructor() { }

  ngOnInit() {
  }

}
