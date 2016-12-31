import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
          <a class="navbar-brand" routerLink="">Search Music on Spotify</a>
        </div>
      </div><!-- /.container-fluid -->
    </nav>
  `,
  styles: [`
    .navbar-header {
      float: left;
      padding: 15px;
      text-align: center;
      width: 100%;
    }

    .navbar-brand {float:none;}
  `]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
