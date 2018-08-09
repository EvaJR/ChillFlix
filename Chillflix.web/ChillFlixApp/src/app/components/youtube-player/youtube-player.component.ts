import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { YoutubePlaylistService } from '../../services/youtube-playlist.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  @Input() movie: Movie;


  constructor(
    private route: ActivatedRoute,
    private youtubeplaylistService: YoutubePlaylistService,
  ) { }

  ngOnInit() {
    // this.getMovie();
  }

  ngOnDestroy(): void {
  }

  get getMovie() {
    return this.movie;
}
}

