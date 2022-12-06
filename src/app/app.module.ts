import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PokedexComponent } from "./pokedex/pokedex.component";
import { AppRoutingModule } from './app-routing.module';
import { EquipoComponent } from './equipo/equipo.component';
import { PokemonesComponent } from './pokemones/pokemones.component';


@NgModule({
  declarations: [
    AppComponent,
    PokedexComponent,
    HeaderComponent,
    EquipoComponent,
    PokemonesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
