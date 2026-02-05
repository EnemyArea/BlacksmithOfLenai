import { createFeatureSelector } from '@ngrx/store';
import { Book } from './app.models';

export const selectBooks = createFeatureSelector<readonly Book[]>('books');
