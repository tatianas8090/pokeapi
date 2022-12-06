import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonesService {
 constructor(private http : HttpClient) {

  }

  getPokemones() {
    return this.http.get('https://pokeapi.co/api/v2/pokemon?limit=151');
  }

  getMoreData (name : string){
    return this.http.get('https://pokeapi.co/api/v2/pokemon/'+name);
  }
}
