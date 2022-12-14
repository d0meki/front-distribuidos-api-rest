import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Persona } from '../interfaces/persona.interface';
import { Deuda } from '../interfaces/deudas.interface';
import { DetalleDeuda } from '../interfaces/detalleDeuda.interface';
import { Pago } from '../interfaces/Pago.interface';
import { DeudaCI } from '../interfaces/DeudaCi.interface';
import { Detalle } from '../interfaces/Detalle.interface';
import { PagoDeuda } from '../interfaces/PagoDeuda.interface';
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
      return this.http.post<Persona>(`${this.url}persona/crearpersona`,persona);
  }
  listarPersonas():Observable<Persona[]>{
    return  this.http.get<Persona[]>(`${this.url}persona/listarpersonas`);
  }
  buscarPersonaPorCi(ci:string):Observable<Persona[]>{
    return  this.http.get<Persona[]>(`${this.url}persona/persona-ci/`+ci);
  }
  deudaPorIdUsuario(id:number):Observable<Deuda[]>{
    return  this.http.get<Deuda[]>(`${this.url}deuda/mydeuda/`+id);
  }
  deudaPagadaUsuario(id:number):Observable<Deuda[]>{
    return  this.http.get<Deuda[]>(`${this.url}deuda/historial/`+id);
  }
  deudaPagadaCI(id:string):Observable<DeudaCI[]>{
    return  this.http.get<DeudaCI[]>(`${this.url}deuda/historialci/`+id);
  }
  listaDeuda():Observable<Deuda[]>{
    return  this.http.get<Deuda[]>(`${this.url}deuda/listardeudas`);
  }
  crearDeuda(deuda:Deuda):Observable<Deuda>{
    return this.http.post<Deuda>(`${this.url}deuda/creardeuda`,deuda);
  }
  crearDetalleDeuda(detalleDeuda:DetalleDeuda):Observable<Deuda>{
    return this.http.post<DetalleDeuda>(`${this.url}detalle-deuda/crear`,detalleDeuda);
  }
  getDetalleDeuda(id:number):Observable<DetalleDeuda[]>{
    return  this.http.get<DetalleDeuda[]>(`${this.url}detalle-deuda/detalle-id/`+id);
  }
  getPago(id:number):Observable<Pago>{
    return this.http.get<Pago>(`${this.url}pago/mypago/`+id);
  }
  getPagoName(id:number):Observable<PagoDeuda>{
    return this.http.get<PagoDeuda>(`${this.url}pago/mypagoname/`+id);
  }
  
  realizarPago(pago:any){
    return  this.http.post<any[]>(`${this.url}pago/crearpago`,pago);
  }
  deudaPorCi(ci:string):Observable<DeudaCI[]>{
    return this.http.get<DeudaCI[]>(`${this.url}deuda/mydeudaci/`+ci);
  }
  getDetalleDeudaConcepto(id:number):Observable<Detalle[]>{
    return  this.http.get<Detalle[]>(`${this.url}detalle-deuda/detalle-id-join/`+id);
  }

}
