import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movie } from '../models/movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class MovieService {


  moviesUrl = 'http://localhost:8080/api/movies';


  constructor(private http: HttpClient) {

   }

  public getAll() {
    return this.http.get(this.moviesUrl);
  }

  getMovie (id: number): Observable<Movie>{
    return this.http.get<Movie>(`${this.moviesUrl}/${id}`);
  }

  addMovie (movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie, httpOptions)
  }

  deleteMovie (id: number): Observable<{}> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.delete(url);
  }

  updateMovie (movie: Movie, id: number): Observable<Movie> {
    httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
    const url = `${this.moviesUrl}/${id}`;

    return this.http.put<Movie>(
      url, movie, httpOptions)
  }

}
