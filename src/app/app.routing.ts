import { Router, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/pages/about.component';
import { ArtistComponent } from './components/artist/artist.component';
import { AlbumComponent } from './components/album/album.component';

export const routing = RouterModule.forRoot([
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: 'artist/:id', component: ArtistComponent },
    { path: 'album/:id', component: AlbumComponent },
    { path: '**', redirectTo: '' }
]);