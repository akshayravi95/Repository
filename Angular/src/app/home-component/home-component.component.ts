import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(document).ready(function(){
      
      $("#div1").hide().fadeIn(5000);
      $("footer").hide().fadeIn(8000);
          
      });
  
  }

}
