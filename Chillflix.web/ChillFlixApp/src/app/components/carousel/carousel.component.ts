import {Component, OnInit, OnDestroy} from '@angular/core';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import {map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { MovieService } from '../../services/movie.service';
import { Movie } from 'src/app/models/movie';
import { Subscription } from '../../../../node_modules/rxjs';
import { YoutubePlaylistService } from '../../services/youtube-playlist.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselComponent implements OnInit, OnDestroy {

  subscription:  Subscription;
  movies: Movie[];


  constructor(
    private youtubePlaylistService: YoutubePlaylistService
  ) { }

  ngOnInit() {
    this.subscription  =  this.youtubePlaylistService.getAll().subscribe(
      results  =>  {
        console.log('youtube content!', results);
        this.movies = this.youtubePlaylistService.getMovieData(results);
        console.log(this.movies[0].name);
      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}



  // images: Array<string>;

  // randomMovies: Movie[];
  // subscription: Subscription;
  // movies: Array<Movie>;

  // constructor(private movieService: MovieService, config: NgbCarouselConfig, private _http: HttpClient) {
  //   // customize default values of carousels used by this component tree
  //   config.interval = 5000;
  //   config.wrap = false;
  //   config.keyboard = false;
  //   config.pauseOnHover = false;
  // }

  // showLatestMovies() {
  //   this.subscription = this.movieService.getAll().subscribe(
  //     (data: Array<Movie>) => {
  //       this.movies = data;
  //       this.numberOfMovies = this.movies.length;
  //       // tslint:disable-next-line:max-line-length
  //       this.eightLatestMovies = [this.numberOfMovies, this.numberOfMovies - 1, this.numberOfMovies - 2, this.numberOfMovies - 3, this.numberOfMovies - 4,
  //       this.numberOfMovies - 5, this.numberOfMovies - 6, this.numberOfMovies - 7];


  //       // this.moviesByNewestId = this.movies.filter(movie => movie.id === this.numberOfMovies);
  //       this.moviesByNewestId = this.movies.filter((movie) => {
  //         return this.eightLatestMovies.find(movId => movId === movie.id) !== undefined;
  //       });


  //       console.log(this.movies);
  //     },
  //     (error) => {
  //       console.error('Failed to get movies', error);
  //     }
  //   );
  // }

  // ngOnInit() {
  //   this._http.get('https://picsum.photos/list')
  //       .pipe(map((images: Array<{id: number}>) => this._randomImageUrls(images)))
  //       .subscribe(images => this.images = images);

  //       this.showLatestMovies();
  // }

  // private _randomImageUrls(images: Array<{id: number}>): Array<string> {
  //   return [1, 2, 3, 4].map(() => {
  //     const randomId = images[Math.floor(Math.random() * images.length)].id;
  //     return `https://picsum.photos/900/500?image=${randomId}`;
  //   });
  // }

  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

