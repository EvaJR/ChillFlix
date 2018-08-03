import { Component, OnInit } from '@angular/core';
import { MovieListComponent } from '../movie-list/movie-list.component'

@Component({
  selector: 'app-new-movie',
  templateUrl: './new-movie.component.html',
  styleUrls: ['./new-movie.component.css']
})
export class NewMovieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  filterNewestMovies() {

  }

}
