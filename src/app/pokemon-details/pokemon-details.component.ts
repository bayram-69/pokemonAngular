import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemon-details',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-details.component.html',
  styleUrl: './pokemon-details.component.css',
})
export class PokemonDetailsComponent implements OnInit {
  pokemonId: number = 0;
  pokemonDetails: any = {};
  pokemon : any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      var id = params.get('id');      
    });
    this.pokemon = history.state.pokemon;
  }
}
