import { ActionReducerMap } from "@ngrx/store";
import { IAppState } from "./app-state.interface";
import { movieListReducer } from "./movielist/movielist.reducer";

export const appStateReducer: ActionReducerMap<IAppState> = {
    movielist: movieListReducer,
    // loggedin: loggedinReducer
  };