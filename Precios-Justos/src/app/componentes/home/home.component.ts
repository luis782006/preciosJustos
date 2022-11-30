import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {interval,take,takeUntil,timer} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  //https://puntotech.github.io/rxjs-docu/operators/f iltering/takeUntil
  //this.router.navigateByUrl('/login');
  
  constructor(
    private router: Router,
  ) { }

  opaTitulo:any;
  opaNacion:any;
  opaDerechos:any;


  ngOnInit(): void {
    const counting = interval(1000);
    const time=timer(5000);
    const takeTime = counting.pipe(take(5));
    takeTime.subscribe(x => {
      switch (x) {
        case x=0:
          this.opaTitulo=1
          break;
        case x=1:
          this.opaNacion=1
          break;
        case x=2:
          this.opaDerechos=1
          break;
          case x=4:
            this.router.navigateByUrl('/miruta');
            break;
        default:
          break;
      }  
    });


}
 
   
}
