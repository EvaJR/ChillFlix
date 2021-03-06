import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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




  constructor(
    private http: HttpClient
  ) { }

  // public getAll() {
  //   return this.http.get(this.api);
  // }

  public getAll() {
    const playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet';
    const key = '&key=AIzaSyB63hhRSMPLS5NnL1ImxMz3vkf1pGMEStI';
    const playlistId = '&playlistId=PL9TFlJz2Em7HYVYMG5QCz56BoGzt4qJTB';
    let limit = '&maxResults=40';

    let api = playlistUrl + playlistId + key + limit;

    return this.http.get<any>(api);
  }


  public getMovieData(result): Movie[] {
    let movies: Movie[] = [];
    result.items.forEach(item => {
      let movie = new Movie();
      movie.id = item.snippet.resourceId.videoId;
      movie.name = item.snippet.title;
      movie.imageUrl = item.snippet.thumbnails.medium.url;
      movie.url = 'https://www.youtube.com/embed/' + item.snippet.resourceId.videoId;
      movie.description = item.snippet.description;
      // movie.name = item.snippet.title;
      movies.push(movie);
    });
    return movies;
  }

  public getTenMovies() {
    const playlistUrl = 'https://www.googleapis.com/youtube/v3/playlistItems/?part=snippet';
    const key = '&key=AIzaSyB63hhRSMPLS5NnL1ImxMz3vkf1pGMEStI';
    const playlistId = '&playlistId=PL9TFlJz2Em7HYVYMG5QCz56BoGzt4qJTB';
    let limit = '&maxResults=10';

    let api = playlistUrl + playlistId + key + limit;

    return this.http.get<any>(api);
  }

  public getCarrouselMovieData(result): Movie[] {
    let movies: Movie[] = [];
    result.items.forEach(item => {
      let movie = new Movie();
      movie.id = item.snippet.resourceId.videoId;
      movie.name = item.snippet.title;
      movie.imageUrl = item.snippet.thumbnails.high.url;
      movie.url = 'https://www.youtube.com/embed/' + item.snippet.resourceId.videoId;
      movie.description = item.snippet.description;
      // movie.name = item.snippet.title;
      movies.push(movie);
    });
    return movies;
  }

  public getMovieById(id: string) {

    const base = 'https://www.googleapis.com/youtube/v3/videos/?part=snippet&id=';
    const key = '&key=AIzaSyB63hhRSMPLS5NnL1ImxMz3vkf1pGMEStI';
    let api = base + id + key;

    return this.http.get<any>(api);
  }

  public fillMovieFromJson(result) {
    let movie  = new Movie();
    movie.name = result.items[0].snippet.title;
    movie.imageUrl = result.items[0].snippet.thumbnails.medium.url;
    movie.url = 'https://www.youtube.com/embed/' + result.items[0].id;
    movie.description = result.items[0].snippet.description;

    console.log("OBJ: ");
    console.log(movie);
    console.log("descriptionfrom json" +result.items[0].id);
    console.log("description from local Obj" +movie.url);

    return movie;
  }

  // use part & Id





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
