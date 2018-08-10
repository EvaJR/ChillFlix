import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubePlaylistService } from '../../services/youtube-playlist.service';
import { Movie } from '../../models/movie';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit, OnDestroy {

  @Input() movie: Movie;

  subscription:  Subscription;


  constructor(
    private route: ActivatedRoute,
    private youtubePlaylistService: YoutubePlaylistService,
  ) { }

  ngOnInit() {
    this.subscription  =  this.youtubePlaylistService.getMovieById("lPVBrRd9wCo").subscribe(
      result  =>  {
        console.log('youtube video data', result);
        this.movie = this.youtubePlaylistService.fillMovieFromJson(result);

      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

//   get getMovie() {
//     return this.movie;
// }
}

