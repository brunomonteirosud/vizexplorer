import { Component, OnInit } from '@angular/core';
import { LoadPlayersService } from '../load-players.service';
import { Player } from '../player';

@Component({
	selector: 'app-players-list',
	templateUrl: './players-list.component.html',
	styleUrls: ['./players-list.component.css']
})
export class PlayersListComponent implements OnInit {
	playersList: Player[] = [];
	selectedPlayerId: number;

  	constructor(private loadPlayersService: LoadPlayersService) { }

  	ngOnInit() {
		this.loadPlayers();
  	}

  	loadPlayers(){
		this.loadPlayersService.getJSON().subscribe(
	  		res => {
				this.assignPlayers(res, this.playersList);
	  		}
		);
  	}

  	assignPlayers = (objList, playersList) => {
		objList.forEach(playerElement => {
	  		playersList.push(playerElement);
		});
  	}

  	onSelect(playerId: number): void {
		this.selectedPlayerId = playerId;
  	}

	addPlayer = (firstName, surname, sex, tier, email) => {
		var newId = this.playersList.length + 1;
		var player = {"id": newId, "firstName": firstName, "surname": surname, "sex": sex, "tier": tier, "email": email}
		this.playersList.push(player);
	}
}
