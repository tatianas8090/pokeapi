import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { EquipoComponent } from './equipo/equipo.component';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PokemonesComponent } from './pokemones/pokemones.component';


const routes: Routes = [
  { path: '', component: HeaderComponent},
  { path: 'team', component: EquipoComponent},
  { path: "buscar", component: PokedexComponent},
  {path:"Pokemones", component: PokemonesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
