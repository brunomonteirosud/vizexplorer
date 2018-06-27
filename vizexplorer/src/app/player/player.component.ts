import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  

  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content);
  }

  ngOnInit() {
  }

}