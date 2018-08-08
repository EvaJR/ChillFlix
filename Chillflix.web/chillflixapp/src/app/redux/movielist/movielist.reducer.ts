import { MovielistActionsUnion, MovielistActionTypes } from './movielist.actions'
import { Movie } from '../../models/movie';

// default state toevoegen

export const movieListReducer = (state: Movie[], action: MovielistActionsUnion): Movie[] => {
  switch (action.type) {
    case MovielistActionTypes.ADD_MOVIES:
        return {
            ...state,
            ...action.movies
        } 
        // return action.movies;        
    default:
      return state;
  }
};
