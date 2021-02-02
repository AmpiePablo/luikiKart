import { InicioService } from './../inicio.service';
import { Component, OnInit } from '@angular/core';
//import { QueryBindingType } from '@angular/compiler/src/core';


@Component({
  selector: 'app-form-crear',
  templateUrl: './form-crear.component.html',
  styleUrls: ['./form-crear.component.css']
})

/*
**************************************************
*Nombre: FormCrearComponente
**************************************************
*Entradas: Archivos de estilo y diseño 
**************************************************
*Salidas: El formulario para crear una carrera
**************************************************
*Objetivo: solicitar datos al usuario y mostrar resultados
**************************************************
*Restricciones: que el servidor este en ejecución.
**************************************************
*
*/
export class FormCrearComponent implements OnInit {
  pistas: any;
  constructor(/*private service: InicioService*/) { }

  ngOnInit(): void {
   /* this.service.getPistas().subscribe(data => {
      console.log(data);
    });*/
  }

}
