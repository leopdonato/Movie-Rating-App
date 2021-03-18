import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
import { Movies } from 'src/app/shared/models/movies.model';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit, AfterViewInit {

  public movies: Movies[];
  public moviesAux: Movies[];

  @ViewChild('feedbackModal' , { static: false }) feedbackModal: any;

  constructor(
    private router: Router,
    private moviesService: MoviesService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.findAll();
  }

  ngAfterViewInit() {
    this.activatedRoute.paramMap
   .pipe(
     map(() => window.history.state
     ))
      .subscribe(response => {
        if (response.status === 'success')
        this.feedbackModal.showModal();
      }, error => {
        console.log(error)
      })
  }

  findAll() {
    this.moviesService.findAll().subscribe((response) => {
      this.movies = response;
      this.moviesAux = response;
    }, error => {
      console.log(error)
    })
  }

  evaluateMovie(movie: Object) {
    this.router.navigate(['/pages/evaluetemovies'], {state: movie});
  }

  filterMovies(event: any) {
    let text = event.target.value
    this.movies = this.moviesAux.filter(
      (element) =>
        (element.title
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .toLowerCase()
          .includes(
            text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase()
          ) ||
          text == '')
    );
  }

}
