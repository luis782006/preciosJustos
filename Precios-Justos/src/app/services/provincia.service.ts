import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, pipe } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  urlBase:string='./assets/api/'
 provincias:string="provincias.json"
 provinciaNombre:string;

 
 constructor(private provinciaService:HttpClient) { }
//src\app\assets\api\provincias.json
//\src\assets\api\provincias.json
  getProvincia(){
   
    return this.provinciaService.get(`${this.urlBase}/${this.provincias}`).pipe(
      // con map de rxjs abro una funcion para mapear la data 
      map((data:any)=>{
        let resp=data.map((provincia:any)=>{  // esta data se la paso a una variable que revibe la data mapeada
          let auxResp={                       // creo otra variable para que recibe los parametros provincia y se le paso un nuevo atributo URL
            ...provincia,
            url:provincia.api,               // le paso el valor provincia.api quien es quien contiene la info de este campo.
          };
          delete auxResp.api;                // luego elimino el atributo API de mi AUX porque ya tiene otro atributo URL con los valores 
          return auxResp;                     // devuelvo el valor 
        });
        console.log(resp);
        return resp;
      })
    );
  }

  getProvinciaBuscada (nombreProvincia:any) {
     let porvinciaTilAux=(nombreProvincia.nombre);
      //elimino las tildes
      porvinciaTilAux=porvinciaTilAux.normalize('NFD').replace(/[\u0300-\u036F]/g,'');

    //elimino y sustituyos los espacios
    porvinciaTilAux=porvinciaTilAux.replace(/\s/g,"-");

    // paso a lowerCase
     this.provinciaNombre=porvinciaTilAux.toLowerCase();
       
    console.log(this.provinciaNombre);
    
  }
  getProvinciasProduct(){
   return this.provinciaService.get(`${this.urlBase}/${this.provinciaNombre}.json`).pipe(
  
    /* map((data:any)=>{
      let respProduct=data.map((product:any)=>{
        let respProductAux={
          ...product,
          value:product.values,
        };
        delete respProductAux.range;
        delete respProductAux.majorDimension;
        return respProductAux;
      })
        
      console.log(respProduct);
      return respProduct;
    })*/ 
   )
    
  
  }
  
}
