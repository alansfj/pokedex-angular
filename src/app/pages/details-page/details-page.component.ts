import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-details-page',
  templateUrl: './details-page.component.html',
  styleUrls: ['./details-page.component.scss'],
})
export class DetailsPageComponent implements OnInit {
  constructor(
    private pokemonService: PokemonService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ id }) => {
      this.pokemonService.getPokemon(id).subscribe((pokemon) => {
        this.pokemonService.onePokemon = pokemon;
      });
    });
  }

  getPokemonService() {
    return this.pokemonService;
  }

  regresar() {
    this.router.navigate(['/catalog']);
  }
}
