import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProvinciaService } from 'src/app/services/provincia.service';
import { runInThisContext } from 'vm';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})

export class DetalleProductoComponent implements OnInit {

  codeProduct: any;
  //
  // descripcion: string;
  // precio: string;
  arrayProduct: any;

  constructor(
    private actRoute: ActivatedRoute,
    private productosService: ProvinciaService
  ) { 

  }

  ngOnInit(): void {
    // this.codeProduct = this.actRoute.snapshot.paramMap.get('codeProduct');
    // console.log(this.codeProduct );
    // this.productosService.getDetalleProducto(this.codeProduct);
    this.getParamUrl();
    this.arrayProduct=this.productosService.arrayProdut;
    console.log(this.arrayProduct);
    
  }

  getParamUrl(): void {
    this.codeProduct = this.actRoute.snapshot.paramMap.get('codeProduct');
      console.log(this.codeProduct );
    this.productosService.getDetalleProducto(this.codeProduct);
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
