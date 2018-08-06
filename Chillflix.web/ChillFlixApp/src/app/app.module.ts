import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MovieService } from './components/services/movie.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { AppRoutingModule } from './/app-routing.module';
import { GenreFilterComponent } from './components/genre-filter/genre-filter.component';
import { EnumSelectPipe } from './pipes/enum-select.pipe';
import { AdminComponent } from './components/admin/admin.component';

import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { VideoPageComponent } from './components/video-page/video-page.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    NavComponent,
    MovieListComponent,
    MovieListItemComponent,
    GenreFilterComponent,
    EnumSelectPipe,
    AdminComponent,

    MovieListItemComponent,
    VideoPlayerComponent,
    VideoPageComponent,
    SortPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  exports: [
    EnumSelectPipe
  ],
  providers: [MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
