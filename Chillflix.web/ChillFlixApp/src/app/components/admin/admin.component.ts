import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../../models/movie';
import { GenreFilterComponent } from '../genre-filter/genre-filter.component';
import { Genre } from '../../models/genre';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  providers: [MovieService],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name = 'Angular';
  genres = Genre;

  movies: Movie[];
  editMovie: Movie;
  personForm: FormGroup;

  constructor(private movieService: MovieService) {
    this.personForm = new FormGroup({
      name: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }
      ),    // todo add validator

      url: new FormControl('', {
        validators: [Validators.required], // Validators.email
        updateOn: 'blur'
      }),

      genre: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),


      description: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),

      imageUrl: new FormControl('', {
        validators: [Validators.required],
        updateOn: 'blur'
      }),

    });

  }

  ngOnInit() {
    this.getMovies();
  }

  isFieldValid(field: string) {
    return !this.personForm.get(field).valid && this.personForm.get(field).touched;
  }

  getMovies() {
    this.movieService.getAll().subscribe(
      (movies: Array<Movie>) => {
        this.movies = movies;
        console.log('Retrieved movies:', this.movies);
      },
      (error) => {
        console.error('Failed to get movies', error);
      }
    );
  }

  add(name: string, url: string, genre: string, description: string, imageUrl: string): void {
    this.editMovie = undefined;
    name = name.trim();
    url = url.trim();
    genre = genre.trim();
    description = description.trim();
    imageUrl = imageUrl.trim();
    if (!name) { return; }

    const newMovie: Movie = { name, url, genre, description, imageUrl } as Movie;
    this.movieService.addMovie(newMovie)
      .subscribe(movie => {
        this.movies.push(movie);
        console.log('Films now contains', this.movies);
        this.movieService.getAll();
      });
      if (this.personForm.valid) {
        console.log("Form Submitted!");
        this.personForm.reset();
      }
  }

  delete(movie: Movie): void {
    this.movies = this.movies.filter(h => h !== movie);
    this.movieService.deleteMovie(movie.id).subscribe();
    this.movieService.getAll();
  }

  edit(movie) {
    this.editMovie = movie;
    this.movieService.getAll();
  }

  update() {
    if (this.editMovie) {
      this.movieService.updateMovie(this.editMovie, this.editMovie.id)
        .subscribe(movie => {
          const ix = movie ? this.movies.findIndex(h => h.id === movie.id) : -1;
          if (ix > -1) { this.movies[ix] = movie; }
        });
      this.editMovie = undefined;
    }
    this.movieService.getAll();
  }
}
