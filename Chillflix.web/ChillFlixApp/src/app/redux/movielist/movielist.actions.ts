import {Action} from '@ngrx/store';
import { Movie } from '../../models/movie';

export enum MovielistActionsTypes{
    ADD_MOVIES = '[Movielist] Add movies',
    // TOGGLE_STATUS = '[Message] ToggleStatus',
    // REMOVE = '[MESSAGE] Remove'
}

export class AddMovies implements Action {
    public readonly type = MovielistActionsTypes.ADD_MOVIES;

    constructor(public readonly movies: Movie[]) {
    };
}

 export type MovielistActionsUnion = AddMovies;

// export type booleansandstrings = string | boolean;

// let a: booleansandstrings