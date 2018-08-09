import { MovielistActionsUnion, MovielistActionTypes } from './movielist.actions'
import { IMovielist, LoadState } from './movielist.interface';

// default state toevoegen

export const movieListReducer = (state: IMovielist, action: MovielistActionsUnion): IMovielist => {
  switch (action.type) {
    case MovielistActionTypes.LOAD_MOVIES_COMPLETE:
        return {
            movies: action.movies,
            loadState: LoadState.Ready
        }
    case MovielistActionTypes.LOAD_MOVIES_ERROR:    
        return {
            ...state,
            loadState: LoadState.Error            
        }
    case MovielistActionTypes.LOAD_MOVIES:
        return {
            ...state,
            loadState: LoadState.Loading
        }
    default:
      return state;
  }
};
