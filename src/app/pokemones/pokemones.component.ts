import { Component, OnInit } from '@angular/core';
import { PokemonesService } from '../services/pokemones.service';
@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.sass']
})
export class PokemonesComponent implements OnInit {
  constructor(private PokemonesService :PokemonesService){}
  pokemones: any[] = []
  ngOnInit(): void {
    this.PokemonesService.getPokemones().subscribe((response:any)=>[
      response.results.forEach((result: { name: string; }) =>{
        this.PokemonesService.getMoreData(result.name).subscribe((uniqresponse:any)=>{
          this.pokemones.push(uniqresponse)
          console.log(this.pokemones)
        })
      })
    ])
  }
}

