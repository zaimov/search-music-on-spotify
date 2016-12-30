import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';
import { Artist } from '../../models/artist.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  private heading = 'Need Music?';
  private description = `Use the ng2Spotify application to browse new releases
    and find your favourite songs.`;
  private searchString: string;
  private searchResults: Artist[];

  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  private searchMusic() {
    this._spotifyService.searchMusic(this.searchString)
      .subscribe(response => {
        this.searchResults = response.artists.items;
      });
  }

}
