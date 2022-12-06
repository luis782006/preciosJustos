import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
