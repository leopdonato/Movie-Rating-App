import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { EvalueteMoviesComponent } from './evaluete-movies/evaluete-movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'movieslist'},
            { path: 'movieslist', component: MoviesListComponent,},
            { path: 'evaluetemovies', component: EvalueteMoviesComponent,},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }