import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../artist/artist.model';
import { Album } from '../album/album.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [`

    .well-sm {
      padding: 0 10px;
    }

    .search-thumbnail {
        width: 40px;
        height: 40px;
        border-radius:100%;
        margin-bottom: 0;
    }
  `]
})
export class SearchComponent implements OnInit {

  private heading = 'Do You Want To Listen To Good Music?';
  private description = `Use the ng2Spotify application to browse new releases
    and find your favourite songs.`;
  private searchString: string;
  private searchResults: any[] = [];
  private artists: Artist[] = [];
  private albums: Album[] = [];
  private tracks: any[] = [];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  private searchMusic() {
    if (this.searchString) {
      this._spotifyService.searchMusic(this.searchString)
      .subscribe(response => {
        if (response.artists.items.length > 0) {
          this.artists = response.artists.items;
        }
        if (response.albums.items.length > 0) {
          this.albums = response.albums.items;
        }
        if (response.tracks.items.length > 0) {
          this.tracks = response.tracks.items;
        }
      });
    }
  }

}
