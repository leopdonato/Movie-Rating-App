import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/shared/models/movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  public movies: Movies[];

  constructor(
    private router: Router,
    private moviesService: MoviesService
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll() {
    this.moviesService.findAll().subscribe(response => {
      this.movies = response;
    }, error => {
      console.log(error)
    })
  }

  evaluateMovie(movie: Object) {
    this.router.navigate(['/pages/evaluetemovies/1'], {state: movie});
  }

}
