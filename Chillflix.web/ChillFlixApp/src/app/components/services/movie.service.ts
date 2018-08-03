import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Movie } from '../../models/movie';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class MovieService {

  constructor(private http: HttpClient) { }

  public getAll() {
    return this.http.get("http://localhost:8080/api/movies");
  }

  public getMovie(id: number) : Observable<Movie> {
    return this.http.get<Movie>(`http://localhost:8080/api/movies/${id}`);
  }

}
