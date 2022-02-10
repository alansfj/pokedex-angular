import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pagination-btns',
  templateUrl: './pagination-btns.component.html',
  styleUrls: ['./pagination-btns.component.scss'],
})
export class PaginationBtnsComponent implements OnInit {
  @Output() onChangePage: EventEmitter<number> = new EventEmitter();

  offset!: number;

  constructor(public pokemonService: PokemonService) {
    // this.offset = this.pokemonService.offset;
  }

  ngOnInit(): void {}

  changePage(num: number) {
    // console.log(num);

    this.pokemonService.offset = this.pokemonService.offset + num;

    this.onChangePage.emit(num);
  }
}
