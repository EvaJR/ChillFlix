import { Component, OnInit, OnDestroy } from '@angular/core';
import { YoutubePlaylistService } from '../../services/youtube-playlist.service';
import { Subscription } from 'rxjs';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit, OnDestroy {

  subscription:  Subscription;
  movies: Movie[];


  constructor(
    private youtubePlaylistService: YoutubePlaylistService
  ) { }

  ngOnInit() {
    this.subscription  =  this.youtubePlaylistService.getAll().subscribe(
      results  =>  {
        console.log('youtube content!', results);
        this.movies = this.youtubePlaylistService.getMovieData(results);

      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
