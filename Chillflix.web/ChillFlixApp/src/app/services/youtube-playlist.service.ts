import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '../../../node_modules/@angular/common/http';
import { Observable } from '../../../node_modules/rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class YoutubePlaylistService {

  playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet&maxResults=50';
  key = '&key=AIzaSyB63hhRSMPLS5NnL1ImxMz3vkf1pGMEStI';
  playlistId = '&playlistId=PLL1Mn_oZ39gzPGLzzfp04uLoOBQ9IBFmt';

  api = this.playlistUrl + this.playlistId + this.key;

  constructor(
    private http: HttpClient
  ) { }

  public getAll() {
    return this.http.get(this.api);
  }

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
