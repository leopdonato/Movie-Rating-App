import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { EvalueteMoviesComponent } from './evaluete-movies/evaluete-movies.component';



@NgModule({
  declarations: [PagesComponent, EvalueteMoviesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
