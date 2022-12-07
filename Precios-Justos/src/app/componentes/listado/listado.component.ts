import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { Product } from 'src/app/Model/Product';
import {ActivatedRoute, Router} from '@angular/router';

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
              private router: Router
             ) {}

  ngOnInit(): void {
    this.getParamtFromUrl();
    this.servicio
      .getProvinciasProduct(this.nombreProvincia)
      .subscribe((dataProductos) => {
        this.provinciasProduct = dataProductos;
               
        //delete atrribute useless
        this.cleaningProvinciaProduct(this.provinciasProduct);

        //cleaning the 3 arrayObjects
        for (let index = 0; index < 2; index++) {
          this.provinciasProduct.values.shift();
        }
        this.pushProducts();

        this.getParamtFromUrl()
      });

  }

  getParamtFromUrl(){
    this.nombreProvincia=this.actRouter.snapshot.paramMap.get('nombreProvincia');
    //console.log(this.nombreProvincia);
  }

  cleaningProvinciaProduct(provinciaProduct: any) {
    delete provinciaProduct.range;
    delete provinciaProduct.majorDimension;
  }

  pushProducts() {
    //console.log(this.arrayProduct);
    for (let index = 0; index < this.provinciasProduct.values.length; index++) {
      // let indexCode: number = 0;
      // let indexNameProduct: number = 1;
      // let price: number = 2;
      // let description:string;
      this.arrayProduct[index] = {
        code: this.provinciasProduct.values[index][0],
        nameProduct: this.provinciasProduct.values[index][1],
        price: this.provinciasProduct.values[index][2],
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus laudantium vel quasi quibusdam dolore incidunt qui consectetur fuga cum"
      };

      this.arrayProduct.push(this.provinciasProduct.values[index]);
    }
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
    this.router.navigateByUrl(`/productos/${this.codeProduct}/detalle-producto`);
  }

  // mostrarDescripcion(idx: any) {    
  //   this.router.navigateByUrl(`/productos/${idx}/detalle-producto`);
  // }

 
}


