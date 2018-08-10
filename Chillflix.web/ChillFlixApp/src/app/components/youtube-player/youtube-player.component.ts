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
    const id = this.route.snapshot.paramMap.get('id');
    this.subscription  =  this.youtubePlaylistService.getMovieById(id).subscribe(
      results  =>  {
        console.log('youtube content!', results);
        this.movie = this.youtubePlaylistService.fillMovieFromJson(results);

        
        let player = document.getElementById('embedPlayer');
        player.setAttribute('src', this.movie.url);

      },
      (error)  =>  {
        console.error('Failed ',  error);
      });
  }

//  getMovie(): void {
//    const id = 'lPVBrRd9wCo';
//    let result = this.youtubePlaylistService.getMovieById(id).subscribe(movie => this.movie =  movie);
//  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

//   get getMovie() {
//     return this.movie;
// }
}

