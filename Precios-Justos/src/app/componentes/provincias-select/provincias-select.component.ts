import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/Model/Provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.scss']
})
export class ProvinciasSelectComponent implements OnInit {

  opcionSeleccionado:string;
  opcionValor:string;
  nombreProvincia:string;
  valueId:number;
  provincias: Provincia[];

  constructor(private provinciaHttp:ProvinciaService) { 
   
  }

  ngOnInit(): void {

    this.provinciaHttp.getProvincia().subscribe((data:any) => {
      this.provincias=data;
    })
    this.valueId=0;
  }

  getNombreProvincia(){
    this.opcionValor = this.opcionSeleccionado;
    this.valueId=Number(this.opcionValor)-2;
    this.nombreProvincia=this.provincias[Number(this.opcionValor)-2].nombre; 
  }

  getListPrecios(){
    
  }
}
