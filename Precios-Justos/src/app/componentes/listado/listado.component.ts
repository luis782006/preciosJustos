import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { Product } from 'src/app/Model/Product';
import {ActivatedRoute, Router} from '@angular/router';
import {Libreria} from 'src/app/Model/libreria';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})

export class ListadoComponent implements OnInit {
  provinciasProduct: any;
  arrayProduct: Product[] = [];
  valueId: any;
  nombreProvincia:any;
  productBuscado:any;
  codeProduct:any;
  
  constructor(private servicio: ProvinciaService,
              private actRouter:ActivatedRoute,
              private router: Router,
              private miLibreria:Libreria
             ) {}

  ngOnInit(): void {
    this.getParamtFromUrl();
    this.servicio
      .getProvinciasProduct(this.nombreProvincia)
      .subscribe((dataProductos) => {
        this.provinciasProduct = dataProductos;
        
        //--------incio de tratamiento de ArrayProduct
                
        this.miLibreria.cleaningProvinciaProduct(this.provinciasProduct);
        this.miLibreria.deleteTwoAtt(this.provinciasProduct);
        this.provinciasProduct=this.miLibreria.pushProducts(this.provinciasProduct);
       
        //--------
        this.getParamtFromUrl()
      });

  }



  getParamtFromUrl(){
    this.nombreProvincia=this.actRouter.snapshot.paramMap.get('nombreProvincia');
    //console.log(this.nombreProvincia);
  }

 
 
  
  filtrarProductos(event:Event){

  }

  mostrarDescripcion(codigo: any) {        
    this.codeProduct = String(codigo);
    // console.log(producto);
    //
    // this.servicio.pushProducto(producto);
    this.servicio.pushProducto(this.arrayProduct);
    //
    // this.enviarArrayProducSeteadoToServ();
    this.router.navigateByUrl(`/productos/${this.codeProduct}/detalle-producto`);
  }

/*  enviarArrayProducSeteadoToServ(){
  this.servicio.arrayProdut=this.arrayProduct;
  //console.log(this.arrayProduct);
  
 } */

 
}


