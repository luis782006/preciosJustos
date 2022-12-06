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
  opaSpin:any;


  ngOnInit(): void {
    const counting = interval(1000);
    const time=timer(6000);
    const takeTime = counting.pipe(take(8));
    takeTime.subscribe(x => {
      switch (x) {
        case 0:
          this.opaTitulo=1
          break;
        case 1:
          this.opaNacion=1
          break;
        case 2:
          this.opaDerechos=1
          break;
        case 3:
          this.opaSpin=1
          break;
        case 7:
          this.router.navigateByUrl('buscar/provincias');
          break;
        default:
          break;
      }  
    });


}
 
   
}
