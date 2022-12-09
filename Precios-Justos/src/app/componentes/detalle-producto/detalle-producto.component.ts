import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/services/service.service';
import { runInThisContext } from 'vm';
import { Libreria } from 'src/app/Model/libreria';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})

export class DetalleProductoComponent implements OnInit {

  // Creamos vairables globales por simplicidad en el manejo (evitamos tener que pasarlas por parámetro y solucionar el problema del pasaje de variables por valor y no por en js/ts...)
  nombreProvincia: string;
  codigoProducto: string;
  provinciasProduct: any = []; // Array
  producto: any;          // Producto específico del array

  constructor(
    private _actRoute: ActivatedRoute,
    private _service: Service,
    private _miLibreria: Libreria
  ) { 

  }

  ngOnInit(): void {
    this.getParamUrl();
    // No funcionó
    // this.productos = this._miLibreria.getProductos(this.nombreProvincia);
    // Alternativa
    this._service.getProductosProvincia(this.nombreProvincia).subscribe((dataProductos) => {
      this.provinciasProduct = dataProductos;
      this._miLibreria.cleaningProvinciaProduct(this.provinciasProduct);
      //this._miLibreria.deleteTwoAtt(this.provinciasProduct);
      this.provinciasProduct = this._miLibreria.pushProducts(this.provinciasProduct);
      // console.log(this.provinciasProduct);
      this.setProducto();
    });

    // Por fuera no funciona!!!
    // this.setProducto();
  }

  getParamUrl() {
    this.nombreProvincia = this._actRoute.snapshot.paramMap.get('nombreProvincia');
    this.codigoProducto = this._actRoute.snapshot.paramMap.get('codeProduct');
  }

  setProducto() { 
    // console.log(this.provinciasProduct); // Llega bien
    this.producto = this.provinciasProduct.filter((p) => p.code == this.codigoProducto) ;
    console.log(this.producto); // Queda como un objeto con un arreglo de una posición dentro
    this.producto = this.producto[0];
    console.log(this.producto); // Ahora estaría usable
  }

}
