import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';
import { Movie } from '../models/movie';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class YoutubePlaylistService {

  playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet';
  key = '&key=AIzaSyB63hhRSMPLS5NnL1ImxMz3vkf1pGMEStI';
  playlistId = '&playlistId=PLL1Mn_oZ39gzPGLzzfp04uLoOBQ9IBFmt';
  limit = '&maxResults=12';

  api = this.playlistUrl + this.playlistId + this.key + this.limit;

  constructor(
    private http: HttpClient
  ) { }

  // public getAll() {
  //   return this.http.get(this.api);
  // }

  public getAll() {
    return this.http.get<any>(this.api);
  }

  public getMovieData(result): Movie[] {
    let movies: Movie[] = [];
    result.items.forEach(item => {
      let movie = new Movie();
      movie.name = item.snippet.title;
      movie.imageUrl = item.snippet.thumbnails.medium.url;
      movie.url = 'https://www.youtube.com/embed/' + item.snippet.resourceId.videoId;
      movie.description =  item.snippet.description;
      
      
      // movie.name = item.snippet.title;
      movies.push(movie);
    });
    return movies;
  }



  // for each (item in result.items) {

  // }





  // public getAll(): Movie[] {
  //   // make movie param.
  //   let movies: Movie[];

  //   let rawJson: Observable<any[]> = this.http.get<any[]>(this.api);

  //   rawJson.subscribe(results => {
  //     results.forEach(result => {
  //       let movie = new Movie();
  //       movie.name = result.items.snippet.title;
  //       movies.push(movie);
  //     });
  //   });

  //   return movies;
  // }

  // getMovie (id: number): Observable<Movie>{
  //   return this.http.get<Movie>(`${this.moviesUrl}/${id}`);
  // }

  // addMovie (movie: Movie): Observable<Movie> {
  //   return this.http.post<Movie>(this.moviesUrl, movie, httpOptions)
  // }

  // deleteMovie (id: number): Observable<{}> {
  //   const url = `${this.moviesUrl}/${id}`;
  //   return this.http.delete(url);
  // }

  // updateMovie (movie: Movie, id: number): Observable<Movie> {
  //   httpOptions.headers = httpOptions.headers.set('Authorization', 'my-new-auth-token');
  //   const url = `${this.moviesUrl}/${id}`;

  //   return this.http.put<Movie>(
  //     url, movie, httpOptions)
  // }
}
