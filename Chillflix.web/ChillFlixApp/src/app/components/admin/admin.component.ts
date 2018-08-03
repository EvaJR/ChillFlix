import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [MovieService],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  movies: Movie[];
  editMovie: Movie;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }

  getMovies(): void {
    this.movieService.getAll()
      .subscribe(movies => this.movies = movies);
  }

  add(name: string): void {
    this.editMovie = undefined;
    name = name.trim();
    if (!name) { return; }

    // The server will generate the id for this new hero
    const newMovie: Movie = { name } as Movie;
    this.movieService.addMovie(newMovie)
      .subscribe(movie => this.movies.push(movie));
  }

  // delete(movie: Movie): void {
  //   this.movies = this.movies.filter(h => h !== movie);
  //   this.movieService.deleteMovie(movie.name).subscribe();

  // }

  edit(movie) {
    this.editMovie = movie;
  }

  // update() {
  //   if (this.editMovie) {
  //     this.movieService.updateMovie(this.editMovie)
  //       .subscribe(movie => {
  //         // replace the hero in the heroes list with update from server
  //         const ix = movie ? this.movies.findIndex(h => h.id === movie.id) : -1;
  //         if (ix > -1) { this.movies[ix] = movie; }
  //       });
  //     this.editMovie = undefined;
  //   }
  // }

}
