import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ActionFooter } from './shared/components/action-footer/action-footer';
import { GameMenu } from './shared/components/game-menu/game-menu';
import { GamePlayerTop } from './shared/components/game-player-top/game-player-top';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ActionFooter, GameMenu, GamePlayerTop],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
