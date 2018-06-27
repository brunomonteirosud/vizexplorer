import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {DataTableModule} from "angular-6-datatable";

import { AppComponent } from './app.component';
import { PlayersListComponent } from './players-list/players-list.component';
import { PlayerComponent } from './player/player.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayersListComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    DataTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
