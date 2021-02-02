import { Component } from '@angular/core';


/*
**************************************************
*Nombre: AppComponent
**************************************************
*Entradas: archivos de estilo y diseño
**************************************************
*Salidas: La componente principal
**************************************************
*Objetivo: Ser la componente principal para derivar
*componentes
**************************************************
*Restricciones: No tiene restricciones
**************************************************
*
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Luiki Kart';
}
