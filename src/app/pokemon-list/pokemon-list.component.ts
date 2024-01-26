import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Pokemon {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  data: Pokemon[] = [];
  private apiURL: string = 'https://pokebuildapi.fr/api/v1/pokemon/limit/100';

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.httpClient.get<Pokemon[]>(this.apiURL).subscribe((data) => {
      this.data = data;
    });
  }

  goToPokemonDetails(id: number): void {
    const currentPokemon = this.data.find((p) => p.id === id);

    if (currentPokemon) {
      this.router.navigate(['/pokemon', id], {
        state: { pokemon: currentPokemon },
      });
    } else {
      console.error(`Pokemon with id ${id} not found.`);
    }
  }
}