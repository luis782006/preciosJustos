import { Component, OnInit } from '@angular/core';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { Product } from 'src/app/Model/Product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.scss'],
})

export class ListadoComponent implements OnInit {
  provinciasProduct: any;
  arrayProduct: Product[] = [];
  valueId: any;
  productBuscado:any;
  constructor(private servicio: ProvinciaService,
              private actRouter:ActivatedRoute
             ) {}

  ngOnInit(): void {
    this.servicio
      .getProvinciasProduct()
      .subscribe((dataProductos) => {
        this.provinciasProduct = dataProductos;

        //delete atrribute useless
        this.cleaningProvinciaProduct(this.provinciasProduct);

        //cleaning the 3 arrayObjects
        for (let index = 0; index < 2; index++) {
          this.provinciasProduct.values.shift();
        }
        this.pushProducts();
      });

  }

  cleaningProvinciaProduct(provinciaProduct: any) {
    delete provinciaProduct.range;
    delete provinciaProduct.majorDimension;
  }

  pushProducts() {
    console.log(this.arrayProduct);
    for (let index = 0; index < this.provinciasProduct.values.length; index++) {
      let indexCode: number = 0;
      let indexNameProduct: number = 1;
      let price: number = 2;
      let description:string;
      this.arrayProduct[index] = {
        code: this.provinciasProduct.values[index][0],
        nameProduct: this.provinciasProduct.values[index][1],
        price: this.provinciasProduct.values[index][2],
        description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, repellendus laudantium vel quasi quibusdam dolore incidunt qui consectetur fuga cum"
      };
      this.arrayProduct.push(this.provinciasProduct.values[index]);
    }
  }
  
  filtrarProductos(event:Event){

  }

  // Aplicar el slug, envío de parametros por url y captura de los mismos.
 // mostrarDes(idProd: number){
    //const idProducto = this.actRouter.snapshot.params;
    //const producto = idProducto;
    // this.servicio.getDetalleProducto(idProducto).subscribe((data: any) => {
    
    // });
    
   /*  console.log(this.arrayProduct[0].code);
    console.log('Soy una foto genérica');
    console.log(this.arrayProduct[0].nameProduct);
    console.log(this.arrayProduct[0].price);
    console.log(this.arrayProduct[0].description); */
    
  //}
}
