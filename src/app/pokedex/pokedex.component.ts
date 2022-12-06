import { Component, OnInit } from '@angular/core';
import { PokedexService } from 'src/app/services/pokedex.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.sass']
})
export class PokedexComponent implements OnInit {
  name: string
  urLImg: string
  urLid:number
  urLName: string
  urLType: string
  urLType2: string
  urLHp: number
  urLatt:number
  urLDef: number
  urLSpAtt:number
  urLSpeed:number
  urLHeight :string
  urLAtt: number;
  urLSpDef : number;

  constructor(private pokedexService : PokedexService){}
  ngOnInit(): void {
  }

  search(){
    this.pokedexService.getPokedex(this.name).subscribe((data:any) => {
    this.urLImg = data.sprites.front_default
    this.urLHeight = data.height
    this.urLName = data.name
    this.urLid = data.id

    if(data.types.length <2 ){
      this.urLType2 = ""
      this.urLType = data.types[0].type.name
    }else{
      this.urLType = data.types[0].type.name
      this.urLType2 = data.types[1].type.name
    }
    this.urLHp = data.stats[0].base_stat
    this.urLAtt = data.stats[1].base_stat
    this.urLDef = data.stats[2].base_stat
    this.urLSpAtt = data.stats[3].base_stat
    this.urLSpDef = data.stats[4].base_stat
    this.urLSpeed = data.stats[5].base_stat
    console.log(data);
    })
  }
}
