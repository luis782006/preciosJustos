import { Component, OnInit } from '@angular/core';
import {interval,timer} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //https://puntotech.github.io/rxjs-docu/operators/filtering/takeUntil
  
  constructor() { }

  ngOnInit(): void {
    const counting=interval(1000);

    counting.subscribe((sec)=>{
      if (sec>1) {
        console.log(sec);
        
      }
    })
  }

}
