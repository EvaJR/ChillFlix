import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription, Observable } from '../../../../node_modules/rxjs';
import { filter} from 'rxjs/operators';
import { Movie } from '../../models/movie';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../redux/app-state.interface';
import * as movielistActions  from '../../redux/movielist/movielist.actions';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  // movies: Array<Movie>;
  movies$: Observable<Movie[]>;
  // link: "../../../assets/images/diehard.jpg"

  constructor(private movieService: MovieService, private readonly store: Store<IAppState>) { }

  ngOnInit() {
    // lezen het stukje state uit de store met de lijst met movies, zodat we die kunnen weergeven.
    this.movies$ = this.store.pipe(
        select(state => state.movielist.movies)
        // filter(movies =>
      )

    this.store.dispatch(new movielistActions.LoadMovies);

    // this.subscription = this.movieService.getAll().subscribe(
    //   // action dispatchen om de movies die we uit de service krijgen, toe te voegen aan de state.

    //   (data: Array<Movie>) => {
    //     this.store.dispatch(new movielistActions.AddMovies(data));
    //     // this.movies = data;
    //     // console.log(this.movies);
    //   },
    //   (error) => {
    //     console.error('Failed to get movies', error);
    //   }
    // );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  // get getMovies() {
  //   return this.movies;
  // }

}
