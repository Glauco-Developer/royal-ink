import { Component, OnInit } from '@angular/core'
declare var $: any

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $("a").on('click', function(event) {
        document.getElementById('preloader').classList.remove('hide')
        setTimeout(() => {
          document.getElementById('preloader').classList.add('hide')
        }, 1500)
        if (this.hash !== "") {
          event.preventDefault()
          let hash = this.hash
          
          setTimeout(() => {
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 500, function(){  
              window.location.hash = hash
            })
          },1300)
        } 
      })
  }
}
