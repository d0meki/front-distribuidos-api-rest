import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }
  // getHeroes():Observable<Heroe>{
  //   return this.http.get<Heroe>('https://rickandmortyapi.com/api/character/');
  // }

  saludar():string{
    return "Hola domeki"
  }

}
