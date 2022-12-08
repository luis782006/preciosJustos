import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Libreria} from 'src/app/Model/libreria'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProvinciasSelectComponent } from './componentes/provincias-select/provincias-select.component';
import { HomeComponent } from './componentes/home/home.component';
import { ListadoComponent } from './componentes/listado/listado.component';
import { DetalleProductoComponent } from './componentes/detalle-producto/detalle-producto.component';
import { Pagina404Component } from './componentes/pagina404/pagina404.component';

@NgModule({
  declarations: [
    AppComponent,
    ProvinciasSelectComponent,
    HomeComponent,
    ListadoComponent,
    DetalleProductoComponent,
    Pagina404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  
  ],
  providers: [Libreria],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
