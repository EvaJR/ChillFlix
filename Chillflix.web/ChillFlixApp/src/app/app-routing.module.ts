import { AdminGuard } from './guards/admin.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MovieListComponent} from '../app/components/movie-list/movie-list.component'
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  
  { path: 'movie-list', component: MovieListComponent },

  { path: 'admin',
    component: AdminComponent,
    canActivate: [AdminGuard]
  }
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
