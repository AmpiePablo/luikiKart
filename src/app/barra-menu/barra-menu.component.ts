import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

/*
**************************************************
*Nombre: BarraMenuComponent
**************************************************
*Entradas: un archivo de estilos y uno de diseño
**************************************************
*Salidas: Muestra el componente de angular material
**************************************************
*Objetivo: Parsear los diferentes archivos para lograr
*un menú de inicio de juego
**************************************************
*Restricciones: Sin restricciones
**************************************************
*
*/
@Component({
  selector: 'app-barra-menu',
  templateUrl: './barra-menu.component.html',
  styleUrls: ['./barra-menu.component.css']
})
export class BarraMenuComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver) {}

}
