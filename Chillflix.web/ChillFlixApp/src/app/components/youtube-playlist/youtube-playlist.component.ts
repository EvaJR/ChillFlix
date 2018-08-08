import { Component, OnInit } from '@angular/core';
import { YoutubePlaylistService } from '../../services/youtube-playlist.service';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-youtube-playlist',
  templateUrl: './youtube-playlist.component.html',
  styleUrls: ['./youtube-playlist.component.css']
})
export class YoutubePlaylistComponent implements OnInit {

  subscription:  Subscription;
  videos: Object[]; //TODO fix this wtf


  constructor(
    private youtubePlaylistService: YoutubePlaylistService
  ) { }

  ngOnInit() {
    this.subscription  =  this.youtubePlaylistService.getAll().subscribe(
      videos  =>  {
        console.log('youtube content!', videos);
        // this.thumbnails = thumbnails;
      },
      (error)  =>  {
        console.error('Failed ',  error);
      })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe;
  }

}
