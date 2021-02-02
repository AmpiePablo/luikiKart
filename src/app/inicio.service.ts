import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

/*
**************************************************
*Nombre: InicioService
**************************************************
*Entradas: un http client pata peticiones al server
**************************************************
*Salidas: Retorna la lista de pistas que existen
**************************************************
*Objetivo: retornar las pistas de carreras en formato
*json para mostrarlas en el juego
**************************************************
*Restricciones: Que la api este corriendo en paralelo
**************************************************
*
*/
export class InicioService {

  data: string[] = [];
  constructor(private http:HttpClient) { }

  getPistas(): Observable<any>{
    return this.http.post("http://localhost:8888/pistas","")
  }
}