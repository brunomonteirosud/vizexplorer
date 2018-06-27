import { Component, OnInit, Output, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PlayersListComponent } from '../players-list/players-list.component';


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
		const firstNameVal = firstName.value;
		const surnameVal = surname.value;
		const sexVal = sex.value;
		const tierVal = tier.value;
		const emailVal = email.value;

		const reEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

		if (firstNameVal != '' && surnameVal != '' && sexVal != '' && tierVal != ''&& emailVal != ''){
    		if (reEmail.test(String(emailVal).toLowerCase())){
				this.playersListRef.addPlayer(firstNameVal, surnameVal, sexVal, tierVal, emailVal);
			}
			else{
				alert('Please insert a valid email.')
			}
		}
		else{
			alert('Please complete all fields to proceed.');
		}
	}
}