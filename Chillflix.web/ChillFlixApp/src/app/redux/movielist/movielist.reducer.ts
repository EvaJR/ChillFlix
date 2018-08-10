import { MovielistActionsUnion, MovielistActionsTypes } from './movielist.actions';
import { Movie } from '../../models/movie';

export const movieListReducer = (state: Movie[], action: MovielistActionsUnion): Movie[] => {
    switch (action.type){
        case MovielistActionsTypes.ADD_MOVIES:
        // let newMovies = actions.movies
        return {
            ...state,
            ...action.movies
        }
        // return action.movies;
        default:
        return state;
    }
};