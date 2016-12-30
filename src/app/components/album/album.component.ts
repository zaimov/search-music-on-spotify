import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../../models/artist.model';
import { Album } from '../../models/album.model';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  private id: string;
  private album: Album[];

  constructor(
    private _spotifyService: SpotifyService,
    private _route: ActivatedRoute) { }

  ngOnInit() {
    this._spotifyService.getAlbum(this.albumId())
      .subscribe(album => {
        console.log(album);
        this.album = album;
      });
  }

  albumId(): string {
    let albumId;
    this._route.params
      .map(params => params['id'])
      .subscribe(id => {
        albumId = id;
      });
    return albumId;
  }

}
