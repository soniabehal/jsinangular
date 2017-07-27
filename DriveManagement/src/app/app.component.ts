import { Component, ViewEncapsulation,OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent   implements OnInit  {
    showLoader: boolean;
  constructor()
  {

  }
  title = 'app works!';

    ngOnInit() {
    
        $.getScript('../../../assets/js/jquery-3.1.1.min.js');
         $.getScript('../../../assets/js/bootstrap.min.js');
    }
  
}
