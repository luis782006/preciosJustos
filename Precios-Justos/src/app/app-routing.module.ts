import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { ProvinciasSelectComponent } from './componentes/provincias-select/provincias-select.component';

const routes: Routes = [
{path: '' ,component :HomeComponent},
{path: 'miruta' ,component :ProvinciasSelectComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
