import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  movies: Array<Movie> = [
    new Movie("https://i.ytimg.com/an_webp/oR_e9y-bka0/mqdefault_6s.webp?du=6000&sqp=COOXhdsF&rs=AOn4CLCDDnhJbrNka0Hl0scgzDQb30EGHA"), 
    new Movie("https://i.ytimg.com/an_webp/E-wr7dD1n5w/mqdefault_6s.webp?du=6000&sqp=CMydhdsF&rs=AOn4CLA9KGIY_kcJzkv_wCljcqVC3XjmMw"),
    new Movie("../../assets/images/diehard.jpg"),
    new Movie("../../assets/gifs/diehard.webp")
    ];

  newMovie: string;

  constructor() { }

  ngOnInit() {}

  

  addMovie() {
    if(this.newMovie !== null && this.newMovie.length > 0) {
        this.movies.push(new Movie(this.newMovie));
        this.newMovie = "";
    }
  }

  movieClicked(movie: Movie) {
    alert(movie.link);
  }
}

class Movie {
  constructor(
    public link: string) {} 
  }


