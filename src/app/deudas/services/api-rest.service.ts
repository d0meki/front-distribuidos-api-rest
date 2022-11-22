import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {
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

}
