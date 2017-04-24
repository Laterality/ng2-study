import { Component, OnInit } from "@angular/core";

import { Friend } from "./friend";
import { FriendService } from "./friend.service";

@Component(
	{
		selector: "dashboard",
		templateUrl: "dashboard.component.html",
		styleUrls: ["dashboard.component.css"]
	}
)
export class DashboardComponent implements OnInit
{
	friends: Friend[] = [];

	constructor(private friendService: FriendService)
	{

	}

	ngOnInit(): void
	{
		this.friendService.getFriends()
		.then((friends) =>
		{
			this.friends = friends.slice(0,3);
		});
	}
}