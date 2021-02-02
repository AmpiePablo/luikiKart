import { FromUnirComponent } from './from-unir/from-unir.component';
import { FormCrearComponent } from './form-crear/form-crear.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'crear',
    component:FormCrearComponent
  },
  {
    path:'unir',
    component:FromUnirComponent
  }
];

/*
**************************************************
*Nombre: AppRoutingModule
**************************************************
*Entradas: un conjunto de componentes
**************************************************
*Salidas: la url de cada componente 
**************************************************
*Objetivo: tomar la url principal y derivarla a diferentes
*url según las entradas
**************************************************
*Restricciones: No tiene restricciones
**************************************************
*
*/

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
