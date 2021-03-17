import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Rating } from 'src/app/shared/models/rating.model';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
import { Movies } from 'src/app/shared/models/movies.model';

@Component({
  selector: 'app-evaluete-movies',
  templateUrl: './evaluete-movies.component.html',
  styleUrls: ['./evaluete-movies.component.scss']
})
export class EvalueteMoviesComponent implements OnInit {

  rating: Rating;
  movie: Movies;

  mock = {
    script: 0,
    photography: 0,
    specialEffects: 0,
    cast: 0
  };

  constructor(
    private location: Location,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.rating = this.mock;
    this.getMovie();
  }

  cancel() {
    this.location.back();
  }

  getMovie() {
   this.activatedRoute.paramMap
   .pipe(
     map(() => window.history.state
     ))
      .subscribe(response => {
        console.log(response)
        this.movie = response;
      }, error => {
        console.log(error)
      })
    }

}
