import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from '../shared/models/movies.model';

@Injectable({
    providedIn: 'root'
})
export class MoviesService {
    constructor(
        private http: HttpClient,
    ) { }


    findAll(): Observable<Movies[]> {
        return this.http.get<Movies[]>('https://run.mocky.io/v3/42f1d87c-2414-43c5-8ed0-d2ae15cfee7b', {
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })
        });
    }
}