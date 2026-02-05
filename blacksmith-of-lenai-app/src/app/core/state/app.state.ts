import { Book } from './app.models';

export interface AppState {
  books: readonly Book[];
  collection: readonly string[];
}
