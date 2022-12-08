import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/Model/Provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Model/Product';
import { Router } from '@angular/router';
import {Libreria} from 'src/app/Model/libreria'
@Component({
  selector: 'app-provincias-select',
  templateUrl: './provincias-select.component.html',
  styleUrls: ['./provincias-select.component.scss'],
})
export class ProvinciasSelectComponent implements OnInit {
  opcionSeleccionado: string;
  opcionValor: string;
  nombreProvincia: string;
  valueId: number;
  provincias: Provincia[];
  provinciaBuscada: Provincia;
  provinciasProduct: any;
  p_nombreProvincia:string; //parametro de url
  arrayProduct: Product[] = [];
  //atributtes arrayProduct
  code: string = 'code';
  nameProduct: string = 'nameProduct';
  price: number = 0;


  enviaLibreria:string=" Que tulllllll"

  constructor(
    private provinciaHttp: ProvinciaService,
    private nombreProvinciaService: ProvinciaService,
    private router: Router,
    private miLibreria:Libreria
  ) {}

  ngOnInit(): void {
    this.provinciaHttp.getProvincia().subscribe((data: any) => {
      this.provincias = data;
    });
    this.valueId = 0;
  }

  

  getNombreProvincia() {
    this.opcionValor = this.opcionSeleccionado;
    this.valueId = Number(this.opcionValor) - 1;
    this.nombreProvincia = this.provincias[Number(this.opcionValor) - 2].nombre;
  }

  sendNombreProvinciasToService() {
    let provinciaBuscada = this.provincias.find(
      (provincias) => provincias.nombre === this.nombreProvincia
    );
   
    this.getProvinciaBuscada();
    
    //this.nombreProvinciaService.getProvinciaBuscada(provinciaBuscada);
    this.router.navigateByUrl(`/productos/${this.nombreProvincia}/listar`);
  }

  //format nombreProvincia
  getProvinciaBuscada () {
    let porvinciaTilAux=(this.nombreProvincia);
    //elimino las tildes
    porvinciaTilAux=porvinciaTilAux.normalize('NFD').replace(/[\u0300-\u036F]/g,'');

    //elimino y sustituyos los espacios
    porvinciaTilAux=porvinciaTilAux.replace(/\s/g,"-");

    // paso a lowerCase
    this.nombreProvincia=porvinciaTilAux.toLowerCase();
       
   
  }


  // cleaningProvinciaProduct(provinciaProduct: any) {
  //   delete provinciaProduct.range;
  //   delete provinciaProduct.majorDimension;
  // }

  //pushing data to new products array
  // pushProducts() {
  //   console.log(this.arrayProduct);

  //   for (let index = 0; index < this.provinciasProduct.values.length; index++) {
  //     let indexCode: number = 0;
  //     let indexNameProduct: number = 1;
  //     let price: number = 2;
  //     this.arrayProduct[index] = {
  //       code: this.provinciasProduct.values[index][0],
  //       nameProduct: this.provinciasProduct.values[index][1],
  //       price: this.provinciasProduct.values[index][2],
  //       description:""
  //     };

  //     this.arrayProduct.push(this.provinciasProduct.values[index]);
  //   }
  // }
}
