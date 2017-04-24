import { Component, Input, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Location } from "@angular/common";

import "rxjs/add/operator/switchMap";

import { Friend } from "./friend";

import { FriendService } from "./friend.service";


@Component({
	selector: "friend-detail",
	templateUrl: "friend-detail.component.html",
	styleUrls: ["friend-detail.component.css"]
})
export class FriendDetailComponent implements OnInit
{
	@Input()
	selectedFriend: Friend;

	constructor(
		private friendService: FriendService,
		private route: ActivatedRoute,
		private location: Location
	)
	{

	}

	ngOnInit(): void
	{
		this.route.params.switchMap((params: Params) =>
		{
			return this.friendService.getFriend(+params["id"]);
		}).subscribe((friend) =>
		{
			this.selectedFriend = friend; 
		});
	}


	goBack(): void 
	{
		this.location.back();
	}

	save(): void
	{
		this.friendService.update(this.selectedFriend)
		.then(() =>
		{
			this.goBack();
		})
	}

}