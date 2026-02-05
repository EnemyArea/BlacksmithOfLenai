import { Book } from './app.models';
import { createReducer, on } from '@ngrx/store';
import { BooksApiActions } from './app.actions';

export const initialState: readonly Book[] = [];

export const booksReducer = createReducer(
  initialState,
  on(BooksApiActions.retrievedBookList, (_state, { books }) => books)
);
