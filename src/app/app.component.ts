import { Component } from '@angular/core';
import { Player } from './player';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Snooker Counter';

  player1: Player = {
    name: "pl1",
    pointsInFrame: 0,
    frames: 0
  }
  player2: Player = {
    name: "pl2",
    pointsInFrame: 0,
    frames: 0
  }
}
