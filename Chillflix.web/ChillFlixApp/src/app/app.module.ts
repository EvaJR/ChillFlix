import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgbModule, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {MatCardModule} from '@angular/material/card';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { MovieService } from './services/movie.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { GenreFilterComponent } from './components/genre-filter/genre-filter.component';
import { EnumSelectPipe } from './pipes/enum-select.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { NewMovieComponent } from './components/new-movie/new-movie.component';

import { VideoPageComponent } from './components/video-page/video-page.component';
import { LoginComponent } from './components/login/login.component';
import { AdminGuard } from './guards/admin.guard';
import { BootstrapTestComponent } from './components/bootstrap-test/bootstrap-test.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CardComponent } from './components/card/card.component';
import { RatingConfigComponent } from './components/rating-config/rating-config.component';
import { HomeComponent } from './components/home/home.component';
import { YoutubePlaylistComponent } from './components/youtube-playlist/youtube-playlist.component';
import { YoutubePlaylistService } from './services/youtube-playlist.service';
import { YoutubePlayerComponent } from './components/youtube-player/youtube-player.component';
// import { UserComponent } from '../components/modal/user.ts';
import { AppModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/directives/alert.component';
import { AlertService } from './services/alert.service';
import { fakeBackendProvider, FakeBackendInterceptor, JwtInterceptor } from './components/helpers';
import { ContactComponent } from './components/contact/contact.component';
// import { IndexComponent } from './components/directives/index/index.component';
// import { SortPipe } from './pipes/sort.pipe';

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
    NewMovieComponent,
    BootstrapTestComponent,

    MovieListItemComponent,
    VideoPageComponent,
    LoginComponent,
    CarouselComponent,
    CardComponent,
    RatingConfigComponent,
    HomeComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    AppModalComponent,
    AlertComponent,
    // IndexComponent,
    ContactComponent,
    // SortPipe
    
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule
  ],
  exports: [
    EnumSelectPipe, NewMovieComponent,
  ],
  providers: [MovieService, AdminGuard, YoutubePlaylistService, AlertService, NgbActiveModal,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: FakeBackendInterceptor,
      multi: true
    },
{
  provide: HTTP_INTERCEPTORS,
  useClass: JwtInterceptor,
  multi: true
}

   ],
  bootstrap: [AppComponent]

})
export class AppModule { }
