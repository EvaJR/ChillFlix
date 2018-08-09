import { Injectable } from "@angular/core";
import { MovieService } from "../../components/services/movie.service";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { Action } from "@ngrx/store";
import { MovielistActionTypes } from "./movielist.actions";
import * as movielistActions from "./movielist.actions";
import { switchMap, map, catchError } from "rxjs/operators";

@Injectable()
export class MovielistEffects {
    constructor(private readonly movieService: MovieService,
                private readonly actions: Actions) { }

    @Effect()
    loadMovies$: Observable<Action> = this.actions.pipe(
        ofType(MovielistActionTypes.LOAD_MOVIES),
        switchMap(action => 
            this.movieService.getAll().pipe(
                // If succesful, dispatch action with the movies
                map((movies) =>   
                    new movielistActions.LoadMoviesComplete(movies)
                ),
                catchError(() => of(new movielistActions.LoadMoviesError()))
                // If error, dispatch action that stuff went wrong
            )    
        )
    )
}

// @Injectable()
// export class MessagesEffects {

//   constructor(
//     private readonly messageService: MessageService,
//     private readonly actions$: Actions) { }

//   @Effect()
//   load$: Observable<Action> = this.actions$.pipe(
//     ofType(MessagesActionTypes.LOAD),
//     mergeMap(action =>
//       this.messageService.getAll().pipe(
//         // If successful, dispatch success action with result
//         map((messages) => new fromMessages.LoadComplete(messages)),
//         // If request fails, dispatch failed action
//         catchError(() => of(new fromMessages.LoadError()))
//       )
//     )
//   );