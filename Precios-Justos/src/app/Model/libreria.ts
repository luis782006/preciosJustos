import { Injectable } from '@angular/core';  


import { Service } from 'src/app/services/service.service';

@Injectable({  
  providedIn: 'root'  
}) 

export class Libreria {

  
  provinciasProduct: any;

  constructor(private _service: Service) {

  }

  // getProductos(nombreProvincia: string) {
  //   this.setProducto(nombreProvincia);
  //   console.log('Aux en get',this._service.aux);
    
  // }

  // setProducto(nombreProvincia: string) {
  //   // console.log('LLegó hasta acá:', this.provinciasProduct);
  //   this._service.getProductosProvincia(nombreProvincia).subscribe((dataProductos) => {
  //     // console.log('LLegó hasta acá:', this.provinciasProduct);
  //     this.provinciasProduct = dataProductos;  
  //     this.cleaningProvinciaProduct(this.provinciasProduct);
  //     this.deleteTwoAtt(this.provinciasProduct);
  //     this.provinciasProduct = this.pushProducts(this.provinciasProduct);
  //     // console.log('LLegó hasta acá:', this.provinciasProduct);
  //     this._service.aux = this.provinciasProduct;
  //     console.log('Aux en set',this._service.aux);
  //     return this.provinciasProduct;}
  //   });
  // }

  cleaningProvinciaProduct(provinciasProduct: any) {
    delete provinciasProduct.range;
    delete provinciasProduct.majorDimension;
  }
  
  deleteTwoAtt(provinciasProduct:any){
    for (let index = 0; index < 2; index++) {
      provinciasProduct.values.shift();
    }
  }

  pushProducts(provinciasProduct: any) {
    let arrayProduct: any[] = [];
    for (let index = 0; index < provinciasProduct.values.length; index++) {
      arrayProduct[index] = {
        code: provinciasProduct.values[index][0],
        nameProduct: provinciasProduct.values[index][1],
        // price: provinciasProduct.values[index][2],
        price: this.parseNumber(provinciasProduct.values[index][2]),
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus laudantium vel quasi quibusdam dolore incidunt qui consectetur fuga cum"
      };
      arrayProduct.push(provinciasProduct.values[index]);
    }
    arrayProduct.pop();
    return arrayProduct;
  }

  parseNumber(price: any) {
    price = price.split(".").join("");
    price = price.split(",").join(".");
    return Number(price);
  }

  formatearString(nombreProvincia: any) {
    if (nombreProvincia != "") {
      let porvinciaTilAux = nombreProvincia;
      //elimino las tildes
      porvinciaTilAux = porvinciaTilAux.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
      //elimino y sustituyos los espacios
      porvinciaTilAux = porvinciaTilAux.replace(/\s/g, "-");
      // paso a lowerCase
      nombreProvincia = porvinciaTilAux.toLowerCase();
    }
    return nombreProvincia;
  }
}   