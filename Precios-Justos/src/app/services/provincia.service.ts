import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProvinciaService {

  urlBase: string = "./assets/api/";
  provincias: string = "provincias.json";
 
 
  constructor(private provinciaService: HttpClient) { }
  //src\app\assets\api\provincias.json
  //\src\assets\api\provincias.json
  
  getProvincia(){   
    return this.provinciaService.get(`${this.urlBase}/${this.provincias}`).pipe(
      // con map de rxjs abro una funcion para mapear la data 
      map((data: any)=>{
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


  getProvinciasProduct(nombreProvincia:string){
    return this.provinciaService.get(`${this.urlBase}/${nombreProvincia}.json`);
  }

  // getDetalleProducto(index: number) {
  //   const productos = this.provinciaService.get(`${this.urlBase}/${this.nombreProvincia}.json`);

  //   const producto = productos[index];
    
  //   console.log(producto);

  //   return producto;
  // }
  
}
