import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { Subscription } from '../../../../node_modules/rxjs';
import { MovieService } from '../services/movie.service';
import { HttpClient } from '../../../../node_modules/@angular/common/http';
import {RatingConfigComponent} from '../../components/rating-config/rating-config.component'


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  images: Array<string>;

  subscription: Subscription;
  movies: Array<Movie>;

  constructor(private movieService: MovieService, private _http: HttpClient) {

  }

  showMovies() {
    this.subscription = this.movieService.getAll().subscribe(
      (data: Array<Movie>) => {
        this.movies = data;

        console.log(this.movies);
      },
      (error) => {
        console.error('Failed to get movies', error);
      }
    );
  }

  ngOnInit() {

    this.showMovies();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

