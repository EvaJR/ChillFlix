import { Movie } from '../models/movie';

export interface IAppState{
    movielist: Movie[];
    // loggedin: boolean;

}

//StoreModule.forRtoo<IAppState>(appStateReducer),