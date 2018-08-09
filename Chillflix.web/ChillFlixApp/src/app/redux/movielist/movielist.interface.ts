import { Movie } from "../../models/movie";

export interface IMovielist {
    movies: Movie[],
    loadState: LoadState
}

export enum LoadState {
    Loading,
    Ready,
    Error
}
