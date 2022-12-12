import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';
import { Deuda } from '../interfaces/deudas.interface';
import { DetalleDeuda } from '../interfaces/detalleDeuda.interface';
import { Pago } from '../interfaces/Pago.interface';
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
  deudaPagadaUsuario(id:number):Observable<Deuda[]>{
    return  this.http.get<Deuda[]>('http://localhost:8080/deuda/historial/'+id);
  }
  listaDeuda():Observable<Deuda[]>{
    return  this.http.get<Deuda[]>('http://localhost:8080/deuda/listardeudas');
  }
  crearDeuda(deuda:Deuda):Observable<Deuda>{
    return this.http.post<Deuda>('http://localhost:8080/deuda/creardeuda',deuda);
  }
  crearDetalleDeuda(detalleDeuda:DetalleDeuda):Observable<Deuda>{
    return this.http.post<DetalleDeuda>('http://localhost:8080/detalle-deuda/crear',detalleDeuda);
  }
  getDetalleDeuda(id:number):Observable<DetalleDeuda[]>{
    return  this.http.get<DetalleDeuda[]>('http://localhost:8080/detalle-deuda/detalle-id/'+id);
  }
  getPago(id:number):Observable<Pago>{
    return this.http.get<Pago>('http://localhost:8080/pago/mypago/'+id);
  }
  realizarPago(pago:any){
    return  this.http.post<any[]>('http://localhost:8080/pago/crearpago',pago);
  }

}
