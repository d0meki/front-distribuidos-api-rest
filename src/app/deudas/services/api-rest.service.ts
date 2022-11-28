import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';
import { Deuda } from '../interfaces/deudas.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
  private url:string = '';
  private personas: Persona[];
  private personas$: Subject<Persona[]>;
  private deudas$: Subject<Deuda[]>;
  private deudas: Deuda[];

  constructor(private http:HttpClient) {
    this.personas = [];
    this.deudas = [];
    this.personas$ = new Subject();
    this.deudas$=new Subject();
   }

  registrarPersona(persona:Persona):Observable<Persona>{
      return this.http.post<Persona>('http://localhost:8080/persona/crearpersona',persona);
  }

  listarPersonas():Observable<Persona[]>{
    return  this.http.get<Persona[]>('http://localhost:8080/persona/listarpersonas');
  }
  listarDeudas():Observable<Deuda[]>{
    return  this.http.get<Deuda[]>('http://localhost:8080/deuda/listardeudas');
  }
  
}
