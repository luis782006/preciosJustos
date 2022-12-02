import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/Model/Provincia';
import { ProvinciaService } from 'src/app/services/provincia.service';
import {NgForm} from '@angular/forms';
import { Product } from 'src/app/Model/Product';

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
  provinciaBuscada:Provincia;
  provinciasProduct:any; 
  
  arrayProduct:Product[]=[];
  //atributtes arrayProduct
  code:string="code";
  nameProduct:string="nameProduct";
  price:number=0;

  constructor(private provinciaHttp:ProvinciaService,
              private nombreProvinciaService:ProvinciaService
             ) { 
   
  }

  ngOnInit(): void {

    this.provinciaHttp.getProvincia().subscribe((data:any) => {
      this.provincias=data;
    })
    this.valueId=0;
  }

  getNombreProvincia(){
    this.opcionValor = this.opcionSeleccionado;
    this.valueId=Number(this.opcionValor)-1;
    this.nombreProvincia=this.provincias[Number(this.opcionValor)-2].nombre; 
  }


  cleaningProvinciaProduct(provinciaProduct:any){
    delete provinciaProduct.range;
    delete provinciaProduct.majorDimension;

  }

  sendNombreProvinciasToService(){
    let provinciaBuscada=this.provincias.find(provincias=>provincias.nombre===this.nombreProvincia);
    this.nombreProvinciaService.getProvinciaBuscada(provinciaBuscada);
    this.nombreProvinciaService.getProvinciasProduct().subscribe((dataProductos)=>{
      this.provinciasProduct=dataProductos;
    
    //delete atrribute useless
      this.cleaningProvinciaProduct(this.provinciasProduct)
      
     //cleaning the 3 arrayObjects
      for (let index = 0; index < 2; index++) {
        this.provinciasProduct.values.shift(); 
      }
      this.pushProducts()
    })
  }
  //pushing data to new products array

  pushProducts(){
     console.log(this.arrayProduct);
  
    for (let index = 0; index <this.provinciasProduct.values.length; index++) {    
      let indexCode:number=0;
      let indexNameProduct:number=1
      let price:number=2;
      this.arrayProduct[index] = {code:this.provinciasProduct.values[index][0],
        nameProduct:this.provinciasProduct.values[index][1],
        price:this.provinciasProduct.values[index][2]
       }; 

     this.arrayProduct.push(this.provinciasProduct.values[index]);
    }
   }

}
