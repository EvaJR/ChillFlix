import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { Movie } from '../../models/movie';



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

  }

  /** DELETE: delete the hero from the server */
  deleteMovie (id: number): Observable<{}> {
    const url = `${this.moviesUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url)
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateMovie (movie: Movie): Observable<Movie> {
    return this.http.put<Movie>(this.moviesUrl, movie)

  }
}
