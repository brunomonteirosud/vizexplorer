import { Component, OnInit } from '@angular/core';
import { players } from '../mock-players';

@Component({
  selector: 'app-players-list',
  templateUrl: './players-list.component.html',
  styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
  playersList = players;

  constructor() { }

  ngOnInit() {
  }

}
