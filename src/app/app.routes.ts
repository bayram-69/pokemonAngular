import { Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
    {
        path: '', component: PokemonListComponent,
    },
    {
        path:  'pokemon/:id', component: PokemonDetailsComponent,
    },
    {
        path: "**", component: NotFoundComponent,
    },
];
