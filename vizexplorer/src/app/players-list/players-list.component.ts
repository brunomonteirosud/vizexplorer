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

	addPlayer = () => {
		var newId = this.playersList.length + 1;
		var player = {"id": newId, "firstName": "zzzzz", "surname": "Lozano", "sex": "f", "tier": "silver", "email": "yanis_lozano@email.com@email.com"}
		this.playersList.push(player);
	}
}
