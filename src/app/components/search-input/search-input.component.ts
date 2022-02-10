import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent implements OnInit {
  constructor(private pokemonService: PokemonService, private router: Router) {}

  termino: string = '';
  hayError: boolean = false;

  ngOnInit(): void {}

  buscar() {
    this.hayError = false;

    this.pokemonService.getPokemon(this.termino).subscribe(
      (pokemon) => {
        console.log(pokemon);
        this.router.navigate(['/details', pokemon.name]);
      },
      (err) => {
        this.hayError = true;
      }
    );
  }
}
