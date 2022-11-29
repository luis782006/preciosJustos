import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

 url:string="./app/assets/api/provincias.json"


 
 constructor(private provinciaService:HttpClient) { }
//src\app\assets\api\provincias.json
//\src\assets\api\provincias.json
  getProvincia(){
    return this.provinciaService.get("./assets/api/provincias.json").pipe(
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


}