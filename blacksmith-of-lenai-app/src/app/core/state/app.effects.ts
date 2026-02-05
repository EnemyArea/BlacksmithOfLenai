import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject, Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { BooksActions } from './app.actions';

@Injectable()
export class BookEffects {
  private actions$ = inject(Actions);

  public addBook$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(BooksActions.addBook),
        tap(() => console.log('Book added successfully.'))
      );
    },
    { dispatch: false }
  );
}
