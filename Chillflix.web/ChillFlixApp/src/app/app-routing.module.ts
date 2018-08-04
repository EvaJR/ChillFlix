import { AdminComponent } from './components/admin/admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MovieListComponent} from '../app/components/movie-list/movie-list.component'
import { VideoPageComponent } from './components/video-page/video-page.component';

const routes: Routes = [
  { path: 'movie-list', component: MovieListComponent },
  { path: 'admin', component: AdminComponent}
  { path: 'movie/:id', component: VideoPageComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // might be useful later
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
