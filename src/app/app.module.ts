import { InicioService } from './inicio.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { FormCrearComponent } from './form-crear/form-crear.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FromUnirComponent } from './from-unir/from-unir.component';

/*
**************************************************
*Nombre: AppModule
**************************************************
*Entradas: N librerías
**************************************************
*Salidas: Diferentes componentes
**************************************************
*Objetivo: Agrupar todos los componentes que son utilizados
**************************************************
*Restricciones: que las dependencias estén bien, 
que no falta ninguna librería instalada
**************************************************
*
*/

@NgModule({
  declarations: [
    AppComponent,
    BarraMenuComponent,
    FormCrearComponent,
    FromUnirComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatInputModule,
    MatSelectModule
  ],
  providers: [InicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
