import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionFooter } from './shared/components/action-footer/action-footer';
import { GameMenu } from './shared/components/game-menu/game-menu';
import { GamePlayerTop } from './shared/components/game-player-top/game-player-top';
import { Store } from '@ngrx/store';
import { selectBooks } from './core/state/app.selectors';
import { BooksActions } from './core/state/app.actions';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActionFooter, GameMenu, GamePlayerTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  private readonly store = inject(Store);

  protected books = this.store.selectSignal(selectBooks);

  protected onAdd(bookId: string): void {
    this.store.dispatch(BooksActions.addBook({ bookId }));
  }
}
