import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from '../artist/artist.model';
import { Album } from './album.model';
import { SpotifyService } from '../../services/spotify.service';
import { MilisecondsTransformPipe } from '../../shared/miliseconds-transform.pipe';

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
        this.album = album;
        console.log(this.album);
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
