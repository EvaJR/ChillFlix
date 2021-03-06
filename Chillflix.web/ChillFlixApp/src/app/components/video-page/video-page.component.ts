import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.css']
})
export class VideoPageComponent implements OnInit {
  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) { }

  ngOnInit() {
     this.getMovie();
  }

  getMovie(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.movieService.getMovie(id).subscribe(movie => this.movie =  movie);
  }

  ngAfterViewInit() {
    let player = document.getElementById('embedPlayer');
    player.setAttribute('src', this.movie.url);
  }
}
