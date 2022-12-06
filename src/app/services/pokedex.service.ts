import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PokedexService {

  private url: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http : HttpClient) {}

  getPokedex(name:string){
    return this.http.get(`${this.url}/${name}`);
  }
}


