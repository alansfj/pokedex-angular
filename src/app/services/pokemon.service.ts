import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList, Pokemon } from '../interfaces/pokemon.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  baseApiUrl: string = 'https://pokeapi.co/api/v2';
  offset: number;
  pokemons: Pokemon[] = [];
  onePokemon!: Pokemon;

  constructor(private http: HttpClient) {
    this.offset = 0;
  }

  getPokemonList(offset: number): Observable<PokemonList> {
    return this.http.get<PokemonList>(
      `${this.baseApiUrl}/pokemon/?limit=20&offset=${offset}`
    );
  }

  getPokemon(nameOrId: string | number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${this.baseApiUrl}/pokemon/${nameOrId}`);
  }
}
