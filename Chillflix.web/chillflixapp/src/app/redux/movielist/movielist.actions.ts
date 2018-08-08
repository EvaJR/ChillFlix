import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie';

export enum MovielistActionTypes {
  ADD_MOVIES = '[Movielist] Add movies',
}

export class AddMovies implements Action {
    public readonly type = MovielistActionTypes.ADD_MOVIES;

    constructor(public readonly movies: Movie[]) {}
}

export type MovielistActionsUnion = AddMovies;
//export type MovielistActionsUnion = AddMovies | DeleteMovie |;
