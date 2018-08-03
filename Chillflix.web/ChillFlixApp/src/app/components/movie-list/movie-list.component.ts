import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription } from '../../../../node_modules/rxjs';
import { Movie } from '../../models/movie';



@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  subscription: Subscription;
  movies: Array<Movie>;
  // link: "../../../assets/images/diehard.jpg"

 


  constructor( private movieService : MovieService) { }

  ngOnInit() {
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

    ngOnDestroy() {
      this.subscription.unsubscribe();
    }

}
