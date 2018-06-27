import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Player } from './player';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadPlayersService {

	constructor(private http: HttpClient) {}

	public getJSON(){
		return this.http.get('assets/data/data-source.json');
	}
}