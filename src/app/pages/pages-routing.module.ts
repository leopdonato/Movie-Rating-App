import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { EvalueteMoviesComponent } from './evaluete-movies/evaluete-movies.component';

const routes: Routes = [
    {
        path: '', component: PagesComponent, children: [
            { path: '', pathMatch: 'full', redirectTo: 'evaluetemovies'},
            { path: 'evaluetemovies', component: EvalueteMoviesComponent,},
        ]
    },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }