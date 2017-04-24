import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { FriendService } from "./friend.service";

import { Friend } from "./friend";



@Component({
	selector: 'my-friends',
	templateUrl: "friends.component.html",
	styleUrls: ["friends.component.css"]
})
export class FriendsComponent implements OnInit{
	title = "Friend List";
	friends: Friend[];
	selectedFriend: Friend;

	constructor(private friendService: FriendService,
	private router: Router)
	{

	}

	ngOnInit(): void
	{
		this.friendService.getFriends().then( 
			(friends) =>
			{
				this.friends = friends;
			});
	}

	onSelect(friend: Friend): void
	{
		this.selectedFriend = friend;
	}

	gotoDetail(): void
	{
		this.router.navigate(["/detail", this.selectedFriend.id]);
	}

	add(name: string): void
	{
		name = name.trim();
		if(!name){return;}
		this.friendService.create(name)
		.then((friend) =>
		{
			this.friends.push(friend);
			this.selectedFriend = null;
		});
	}

	delete(friend: Friend): void
	{
		this.friendService
		.delete(friend.id)
		.then(() =>
		{
			this.friends = this.friends.filter((f) =>
			{
				return f !== friend;
			});
			if(this.selectedFriend === friend) { this.selectedFriend = null; }
		});
	}
}

