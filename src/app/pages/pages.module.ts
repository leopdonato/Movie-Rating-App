import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EvalueteMoviesComponent } from './evaluete-movies/evaluete-movies.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LimitToPipe } from '../shared/pipes/limit-to.pipe';



@NgModule({
  declarations: [
    PagesComponent, 
    EvalueteMoviesComponent,
    MoviesListComponent,
    LimitToPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NgbModule,
  ],
})
export class PagesModule { }
