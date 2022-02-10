import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    private locationService: Location
  ) {}

  termino: string = '';
  hayError: boolean = false;

  ngOnInit(): void {}

  buscar() {
    this.hayError = false;

    this.pokemonService.getPokemon(this.termino).subscribe(
      (pokemon) => {
        console.log(pokemon);
        this.locationService.go(`/details/${this.termino}`);
        window.location.reload();
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
