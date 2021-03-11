import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Rating } from 'src/app/shared/rating.model';

@Component({
  selector: 'app-evaluete-movies',
  templateUrl: './evaluete-movies.component.html',
  styleUrls: ['./evaluete-movies.component.scss']
})
export class EvalueteMoviesComponent implements OnInit {

  rating: Rating;

  mock = {
    script: 0,
    photography: 0,
    specialEffects: 0,
    cast: 0
  };

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
    this.rating = this.mock;
  }

  cancel() {
    this.location.back();
  }

}
