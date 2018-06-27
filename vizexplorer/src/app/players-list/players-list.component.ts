import { Component, OnInit } from '@angular/core';
import { players } from '../mock-players';
import { Player } from '../player';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  playersList = players;
  selectedPlayer: Player;

  constructor() { }

  ngOnInit() {
  }

  onSelect(player: Player): void {
    this.selectedPlayer = Player;
  }

}
