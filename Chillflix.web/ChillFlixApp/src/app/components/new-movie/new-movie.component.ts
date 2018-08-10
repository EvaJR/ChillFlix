import { Component, OnInit, OnDestroy } from '@angular/core';
import { Movie } from '../../models/movie';
import { Subscription } from 'rxjs';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit, OnDestroy {

  moviesByNewestId: Movie[];
  numberOfMovies: number;
  eightLatestMovies: number[];


  subscription: Subscription;
  movies: Array<Movie>;
  // link: "../../../assets/images/diehard.jpg"
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.subscription = this.movieService.getAll().subscribe(
      (data: Array<Movie>) => {
        this.movies = data;
        this.numberOfMovies = this.movies.length;
        this.eightLatestMovies = [this.numberOfMovies, this.numberOfMovies - 1, this.numberOfMovies - 2, this.numberOfMovies - 3, this.numberOfMovies - 4,
        this.numberOfMovies - 5, this.numberOfMovies - 6, this.numberOfMovies - 7];


        // this.moviesByNewestId = this.movies.filter(movie => movie.id === this.numberOfMovies);
        this.moviesByNewestId = this.movies.filter((movie) => {
          return this.eightLatestMovies.find(movId => movId === movie.id) !== undefined;
        });


        console.log(this.movies);
      },
      (error) => {
        console.error('Failed to get movies', error);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // filterNewestMovies() {

  //   this.moviesByNewestId = this.movies.filter(movie => movie.id === 1);
  //   return this.moviesByNewestId[0];

  // }





}
