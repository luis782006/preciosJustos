import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})

export class DetalleProductoComponent implements OnInit {

  codeProduct: any;
  //
  descripcion: string;
  precio: string;

  constructor(
    private actRoute: ActivatedRoute,
    private productosService: ProvinciaService
  ) { 

  }

  ngOnInit(): void {
    // this.codeProduct = this.actRoute.snapshot.paramMap.get('codeProduct');
    // console.log({ codigoProducto: this.codeProduct });
    // this.productosService.getDetalleProducto(this.codeProduct);

    // llamar al servicio, ademas de ver como pasar el arrayProduct del componente anterior a este para filtrarlo por ese code

    // Propuesta, enviar el índice en lugar del código EAN...
    const idx = this.actRoute.snapshot.paramMap.get('idx');
    // const producto = this.productosService.getDetalleProducto(idx); // y mostrar datos producto en el html
    let producto: any;
    this.productosService.getDetalleProducto(idx).subscribe((p: any) => producto = p); // y mostrar datos producto en el html
    console.log({producto});
    
    this.descripcion = producto[1];
    this.precio = producto[2];
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
