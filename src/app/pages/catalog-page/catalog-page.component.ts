import { newArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs';
import { Pokemon, Result } from 'src/app/interfaces/pokemon.interfaces';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-catalog-page',
  templateUrl: './catalog-page.component.html',
  styleUrls: ['./catalog-page.component.scss'],
})
export class CatalogPageComponent implements OnInit {
  constructor(private pokemonService: PokemonService) {}

  pokemonResults!: Result[];
  pokemons: Pokemon[] = [];

  ngOnInit(): void {
    this.getPage(this.pokemonService.offset);
  }

  getPage(offset: number) {
    this.pokemonService.getPokemonList(offset).subscribe((resp) => {
      // console.log(resp);
      this.pokemonResults = resp.results;

      let newArr: Pokemon[] = [];

      resp.results.forEach((pokemonObj) => {
        this.pokemonService.getPokemon(pokemonObj.name).subscribe((pokemon) => {
          newArr.push(pokemon);
        });
      });

      this.pokemonService.pokemons = newArr;
    });
  }

  changePage() {
    // console.log('changePage');
    this.getPage(this.pokemonService.offset);
  }

  getPokemonService() {
    return this.pokemonService;
  }

  showPokemons() {
    console.log('service', this.pokemonService.pokemons);
    console.log(this.pokemons);
  }
}
