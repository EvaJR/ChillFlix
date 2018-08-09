import { Action } from '@ngrx/store';
import { Movie } from '../../models/movie';

export enum MovielistActionTypes {
  LOAD_MOVIES = '[Movielist] Load movies',
  LOAD_MOVIES_COMPLETE = '[Movielist] Load movies complete',
  LOAD_MOVIES_ERROR = '[Movielist] Load movies error'
}

// LoadMoviesComplete is action for the reducer, we will dispatch this in the effect if service error
export class LoadMoviesComplete implements Action {
  public readonly type = MovielistActionTypes.LOAD_MOVIES_COMPLETE;

  constructor(public readonly movies: Movie[]) { }
}

// LoadMoviesError is action for the reducer, we will dispatch this in the effect if service error
export class LoadMoviesError implements Action {
  public readonly type = MovielistActionTypes.LOAD_MOVIES_ERROR;
}

// LoadMovies is action for the effect, we will dispatch this in the component
export class LoadMovies implements Action {
  public readonly type = MovielistActionTypes.LOAD_MOVIES;
}

export type MovielistActionsUnion = LoadMovies | LoadMoviesComplete | LoadMoviesError;
