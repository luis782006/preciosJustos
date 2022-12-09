import { Component, OnInit } from '@angular/core';
import { Service } from 'src/app/services/service.service';
import { Product } from 'src/app/Model/Product';
import { ActivatedRoute, Router } from '@angular/router';
import { Libreria } from 'src/app/Model/libreria';
import {Location} from '@angular/common'

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})

export class ListadoComponent implements OnInit {
  provinciasProduct: any;
  provinciasProductosFilter:any;
  valueId: any;
  nombreProvincia: any;
  productBuscado: any;
  productoABuscar:string;

  


  codeProduct: any;

  constructor(
    private _service: Service,
    private _actRouter: ActivatedRoute,
    private _router: Router,
    private _miLibreria: Libreria,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getParamtFromUrl();
    // No funcionó
    // this.provinciasProduct = this._miLibreria.getProductos(this.nombreProvincia);
    // Alternativa
    this._service.getProductosProvincia(this.nombreProvincia).subscribe((dataProductos) => {

      this.provinciasProduct = dataProductos;
      this.provinciasProductosFilter=dataProductos;
      
      this._miLibreria.cleaningProvinciaProduct(this.provinciasProductosFilter);
      this._miLibreria.deleteTwoAtt(this.provinciasProductosFilter);
      this.provinciasProductosFilter = this._miLibreria.pushProducts(this.provinciasProductosFilter);

      this._miLibreria.cleaningProvinciaProduct(this.provinciasProduct);
      this._miLibreria.deleteTwoAtt(this.provinciasProduct);
      this.provinciasProduct = this._miLibreria.pushProducts(this.provinciasProduct);
            
    });
  
  }


  getParamtFromUrl() {
     this.nombreProvincia = this._actRouter.snapshot.paramMap.get('nombreProvincia');
     }


  filtrarProductos(productBuscado:any) {
    this.provinciasProductosFilter=this.provinciasProduct.filter((product)=> {
    return this._miLibreria.formatearString(product.nameProduct).includes(this._miLibreria.formatearString(productBuscado)) ;
    })   
    
  }

  mostrarDescripcion(codigo: any) {
    this.codeProduct = String(codigo);
    this._router.navigateByUrl(`/provincias/${this.nombreProvincia}/productos/${this.codeProduct}/detalles`);
  }

  goBack(){
    this.location.back();
  }

}


