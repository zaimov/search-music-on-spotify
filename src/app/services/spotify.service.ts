import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
  private searchUrl: string;
  private artistUrl:  string;
  private albumsUrl: string;
  private albumUrl: string;

  constructor(private _http: Http) { }

  searchMusic(searchString: string, type='artist,album,track') {
    if (searchString) {
      this.searchUrl = 'https://api.spotify.com/v1/search?query=' + searchString 
        + '&offset=0&limit=5&type=' + type + '&market=US';
      return this._http.get(this.searchUrl)
        .map(response => response.json());
    }
  }

  getArtist(artistId: string) {
    this.artistUrl = 'https:///api.spotify.com/v1/artists/' + artistId;
    return this._http.get(this.artistUrl)
      .map(response => response.json());
  }

  getAlbums(artistId: string) {
    this.albumsUrl = 'https:///api.spotify.com/v1/artists/' + artistId + '/albums';
    return this._http.get(this.albumsUrl)
      .map(response => response.json());
  }

  getAlbum(albumId: string) {
    this.albumUrl = 'https:///api.spotify.com/v1/albums/' + albumId;
    return this._http.get(this.albumUrl)
      .map(response => response.json());
  }
}
