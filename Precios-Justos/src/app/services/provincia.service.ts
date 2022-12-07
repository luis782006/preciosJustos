import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProvinciaService {

  urlBase: string = "./assets/api/";
  provincias: string = "provincias.json";

  // Aux. Almacenaremos la provincia seleccionada para saber a qué objeto llamar cuando seleccionen un producto
  // Opción 1.
  provSelec: any;

  constructor(private provinciaService: HttpClient) { }
  //src\app\assets\api\provincias.json
  //\src\assets\api\provincias.json

  getProvincia() {
    return this.provinciaService.get(`${this.urlBase}/${this.provincias}`).pipe(
      // con map de rxjs abro una funcion para mapear la data 
      map((data: any) => {
        let resp = data.map((provincia: any) => {  // esta data se la paso a una variable que revibe la data mapeada
          let auxResp = {                       // creo otra variable para que recibe los parametros provincia y se le paso un nuevo atributo URL
            ...provincia,
            url: provincia.api,               // le paso el valor provincia.api quien es quien contiene la info de este campo.
          };
          delete auxResp.api;                // luego elimino el atributo API de mi AUX porque ya tiene otro atributo URL con los valores 
          return auxResp;                     // devuelvo el valor 
        });
        console.log(resp);
        return resp;
      })
    );
  }


  getProvinciasProduct(nombreProvincia: string) {
    this.provSelec = this.provinciaService.get(`${this.urlBase}/${nombreProvincia}.json`);
    // this.provinciaService.get(`${this.urlBase}/${nombreProvincia}.json`).subscribe((p: any) => this.provSelec = p);
    console.log(this.provSelec);
    return this.provSelec;
  }

  getDetalleProducto(idx: any) {
    idx = Number(idx);
    console.log({ provSelec: this.provSelec.values });
    console.log({ producto: this.provSelec.values[idx] });
    
    return this.provSelec.values[idx+2];
  }

}
