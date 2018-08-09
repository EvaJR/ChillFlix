import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent} from '../app/components/movie-list/movie-list.component'
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { YoutubePlaylistComponent } from './components/youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';


const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'home', component: HomeComponent },
  { path: 'featured', component: CarouselComponent },
  { path: 'movie-cards', component: CardComponent },
  { path: 'youtube-playlist', component: YoutubePlaylistComponent },
  { path: 'youtube-player', component: YoutubePlayerComponent },


  { path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, // might be useful later
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],

  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
