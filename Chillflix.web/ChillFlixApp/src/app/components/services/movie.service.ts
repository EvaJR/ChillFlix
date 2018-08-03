import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Movie } from '../../models/movie';
import { Observable } from '../../../../node_modules/rxjs';

@Injectable()
export class MovieService {


  moviesUrl = 'http://localhost:8080/api/movies';


  constructor(private http: HttpClient) {

   }


  public getAll(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesUrl)
  }


  addMovie (movie: Movie): Observable<Movie> {
    return this.http.post<Movie>(this.moviesUrl, movie)

  public getAll() {
    return this.http.get("http://localhost:8080/api/movies");
  }

  /** DELETE: delete the hero from the server */
  deleteMovie (id: number): Observable<{}> {
    const url = `${this.moviesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
  }

  public getMovie(id: number) : Observable<Movie> {
    return this.http.get<Movie>(`http://localhost:8080/api/movies/${id}`);
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateMovie (movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.moviesUrl, movie)

  }
}
