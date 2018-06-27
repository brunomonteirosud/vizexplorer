import { Component, OnInit, Output, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayersListComponent } from '../players-list/players-list.component';
import { Player } from '../player';

@Component({
	selector: 'app-player',
	templateUrl: './player.component.html',
	styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
	@Input()
	playersListRef: PlayersListComponent;

	constructor(private modalService: NgbModal) {}

	open(content) {
		this.modalService.open(content);
	}

	ngOnInit() {
	}

	addNewPlayer(firstName, surname, sex, tier, email){
		this.playersListRef.addPlayer(firstName.value, surname.value, sex.value, tier.value, email.value);
	}
}