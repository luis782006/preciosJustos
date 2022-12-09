import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service.service';
import { Product } from 'src/app/Model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Libreria } from 'src/app/Model/libreria';
import { Location } from '@angular/common'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})

export class ListadoComponent implements OnInit {
  provinciasProduct: any;
  provinciasProductosFilter: any;
  // provinciasProductosPrecio: any;
  valueId: any;
  nombreProvincia: any;
  codeProduct: any;
  // productoABuscar: string;
  productBuscado: string = "";
  productPrecio: number;
  precioMax: number;
  

  constructor(
    private _service: Service,
    private _actRouter: ActivatedRoute,
    private _router: Router,
    private _miLibreria: Libreria,
    private location: Location
  ) { 
  }

  ngOnInit(): void {
    this.getParamtFromUrl();
    // No funcionó
    // this.provinciasProduct = this._miLibreria.getProductos(this.nombreProvincia);
    // Alternativa
    this._service.getProductosProvincia(this.nombreProvincia).subscribe((dataProductos) => {

      this.provinciasProduct = dataProductos;
      this.provinciasProductosFilter = dataProductos;

      this._miLibreria.cleaningProvinciaProduct(this.provinciasProductosFilter);
      this._miLibreria.deleteTwoAtt(this.provinciasProductosFilter);
      this.provinciasProductosFilter = this._miLibreria.pushProducts(this.provinciasProductosFilter);

      this._miLibreria.cleaningProvinciaProduct(this.provinciasProduct);
      this._miLibreria.deleteTwoAtt(this.provinciasProduct);
      this.provinciasProduct = this._miLibreria.pushProducts(this.provinciasProduct);

      // console.log(this.provinciasProduct.map((p) => p.price));
      this.setPrecioMax();
      // console.log(this.precioMax);
      // console.log(this.productPrecio);
      
      
    });

  }


  getParamtFromUrl() {
    this.nombreProvincia = this._actRouter.snapshot.paramMap.get('nombreProvincia');
  }

  filtrarProductos(productBuscado: any) {
    this.provinciasProductosFilter = this.provinciasProduct.filter((product) => {
      if (this.productPrecio != 0) {
        return this._miLibreria
        .formatearString(product.nameProduct)
        .includes(this._miLibreria.formatearString(productBuscado))
        || product.code.includes(this.productBuscado) 
        && (product.price <= this.productPrecio)
        
      } else {
        return this._miLibreria
        .formatearString(product.nameProduct)
        .includes(this._miLibreria.formatearString(productBuscado))
        || product.code.includes(this.productBuscado)
      }
    });
  }

  mostrarDescripcion(codigo: any) {
    this.codeProduct = String(codigo);
    this._router.navigateByUrl(`/provincias/${this.nombreProvincia}/productos/${this.codeProduct}/detalles`);
  }

  goBack() {
    this.location.back();
  }

  setPrecioMax() {
    this.precioMax = this.provinciasProduct[0].price;
    this.provinciasProduct.forEach((data) => {
      if (data.price > this.precioMax) this.precioMax = data.price;
    });
    this.productPrecio = this.precioMax;
  }

  filtrarPrecio(precioIngresado: any) {
    // this.productPrecio = precioIngresado;

    this.provinciasProductosFilter = this.provinciasProduct.filter((product) => {
      if (this.productBuscado == "") {
        // console.log("Está vacío");
        return (product.price <= precioIngresado)
      } else {
        // console.log("Noooo está vacío");
        return (this._miLibreria
          .formatearString(product.nameProduct)
          .includes(this._miLibreria.formatearString(this.productBuscado))
          || product.code.includes(this.productBuscado))
          && (product.price <= precioIngresado)
      }
    });
  }

}


