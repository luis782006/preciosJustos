import { Component, OnInit } from '@angular/core';
import { Provincia } from 'src/app/Model/Provincia';
import { Service } from 'src/app/services/service.service';
import { NgForm } from '@angular/forms';
import { Product } from 'src/app/Model/Product';
import { Router } from '@angular/router';
import { Libreria } from 'src/app/Model/libreria';

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
  p_nombreProvincia: string; //parametro de url
  arrayProduct: Product[] = [];
  //atributtes arrayProduct
  code: string = 'code';
  nameProduct: string = 'nameProduct';
  price: number = 0;

  constructor(
    private _service: Service,
    private _router: Router,
    private miLibreria: Libreria
  ) { }

  ngOnInit(): void {
    this._service.getProvincia().subscribe((data: any) => {
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
    this._router.navigateByUrl(`/provincias/${this.nombreProvincia}/listar`);
  }

  //format nombreProvincia
  getProvinciaBuscada() {
    let porvinciaTilAux = (this.nombreProvincia);
    //elimino las tildes
    porvinciaTilAux = porvinciaTilAux.normalize('NFD').replace(/[\u0300-\u036F]/g, '');
    //elimino y sustituyos los espacios
    porvinciaTilAux = porvinciaTilAux.replace(/\s/g, "-");
    // paso a lowerCase
    this.nombreProvincia = porvinciaTilAux.toLowerCase();
  }

}
