import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/artist.model';
import { Album } from '../../models/album.model';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  private id: string;
  private artist: Artist[];
  private albums: Album[];


  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._spotifyService.getArtist(this.artistId())
      .subscribe(artist => {
        this.artist = artist;
      });
    this._spotifyService.getAlbums(this.artistId())
      .subscribe(albums => {
        this.albums = albums.items;
      });
  }

  private artistId(): string {
    let artistId;
    this._route.params
      .map(params => params['id'])
      .subscribe(id => {
        artistId = id;
      });
    return artistId;
  }

}
