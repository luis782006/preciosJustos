import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProvinciasSelectComponent } from './componentes/provincias-select/provincias-select.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'buscar/provincias', component: ProvinciasSelectComponent },
  { path: 'productos/:nombreProvincia/listar', component: ListadoComponent },
  { path: 'productos/:codeProduct/detalle-producto', component: DetalleProductoComponent},
  { path: '**', component:Pagina404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}