import { TestBed, inject } from '@angular/core/testing';

import { YoutubePlaylistService } from './youtube-playlist.service';

describe('YoutubePlaylistService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [YoutubePlaylistService]
    });
  });

  it('should be created', inject([YoutubePlaylistService], (service: YoutubePlaylistService) => {
    expect(service).toBeTruthy();
  }));
});
