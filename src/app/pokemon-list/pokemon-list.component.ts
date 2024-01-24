import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [],
  templateUrl: './pokemon-list.component.html',
  styleUrl: './pokemon-list.component.css',
})
export class PokemonListComponent implements OnInit {
  data: any[] = [];

  constructor(private httpClient: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  private apiURL: string = 'https://pokebuildapi.fr/api/v1/pokemon/limit/100';

  fetchData() {
    this.httpClient.get(this.apiURL).subscribe((data: any) => {
      this.data = data;
    });
  }

  goToPokemonDetails(id: number): void {
    const currentPokemon = this.data.find((p) => p.id === id);

    this.router.navigate(['/pokemon', id], {
      state: { pokemon: currentPokemon },
    });
  }
}
