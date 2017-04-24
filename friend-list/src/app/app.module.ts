import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from "@angular/router";

import { AppComponent } from './app.component';
import { FriendDetailComponent } from "./friend-detail.component"
import { FriendsComponent } from "./friends.component";
import { DashboardComponent } from "./dashboard.component";
import { FriendSearchComponent } from "./friend-search.component";
import { FriendService } from "./friend.service";

import { AppRoutingModule } from "./app-routing.module";

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from "angular2-in-memory-web-api";
import { InMemoryDataService } from "./in-memory-data.service";


@NgModule({
	declarations: [
		AppComponent,
		FriendDetailComponent,
		FriendsComponent,
		DashboardComponent,
		FriendSearchComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		AppRoutingModule,
		InMemoryWebApiModule.forRoot(InMemoryDataService)
	],
	providers: [FriendService],
	bootstrap: [AppComponent]
})
export class AppModule { }
