import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';
import { Deuda } from '../interfaces/deudas.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private url:string = 'http://localhost:8080/'
  private personas: Persona[];
  private personas$: Subject<Persona[]>;

  constructor(private http:HttpClient) {
    this.personas = [];
    this.personas$ = new Subject();
   }

  registrarPersona(persona:Persona):Observable<Persona>{
      return this.http.post<Persona>('http://localhost:8080/persona/crearpersona',persona);
  }

  listarPersonas():Observable<Persona[]>{
    return  this.http.get<Persona[]>('http://localhost:8080/persona/listarpersonas');
  }
  buscarPersonaPorCi(ci:string):Observable<Persona[]>{
    return  this.http.get<Persona[]>('http://localhost:8080/persona/persona-ci/'+ci);
  }
  deudaPorIdUsuario(id:number):Observable<Deuda[]>{
    return  this.http.get<Deuda[]>('http://localhost:8080/deuda/mydeuda/'+id);
  }

}
