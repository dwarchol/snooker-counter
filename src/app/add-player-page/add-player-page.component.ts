import { Component, Input } from '@angular/core';
import { Player } from '../player';


@Component({
  selector: 'app-add-player-page',
  templateUrl: './add-player-page.component.html',
  styleUrls: ['./add-player-page.component.css'],
})
export class AddPlayerPageComponent {
  @Input() player!: Player;

  onClick(){
    console.log(this.player)
  }
}
