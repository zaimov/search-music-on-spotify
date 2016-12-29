import { Router, RouterModule } from '@angular/router';

import { SearchComponent } from './components/search/search.component';
import { AboutComponent } from './components/pages/about.component';

export const routing = RouterModule.forRoot([
    { path: '', component: SearchComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '' }
]);