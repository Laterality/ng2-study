import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

// Observable class extensions
import "rxjs/add/observable/of";

// Observable operators
import "rxjs/add/operator/catch";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";

import { FriendSearchService } from "./friend-search.service";
import { Friend } from "./friend";

@Component(
	{
		selector: "friend-search",
		templateUrl: "./friend-search.component.html",
		styleUrls: ["./friend-search.component.css"],
		providers: [FriendSearchService]
	}
)
export class FriendSearchComponent implements OnInit
{
	friends: Observable<Friend[]>;
	private searchTerms = new Subject<string>();

	constructor(
		private friendSearchService: FriendSearchService,
		private router: Router
	)
	{

	}

	// Push a search term into the Observable stream.
	search(term: string): void
	{
		this.searchTerms.next(term);
	}

	ngOnInit(): void
	{
		this.friends = this.searchTerms.debounceTime(300) // wait 300ms after each keystroke before considering the term
		.distinctUntilChanged()// ignore if next search term is same as previous
		.switchMap((term) => // switch to new observable each time the term changes
		{
			return term 
			? this.friendSearchService.search(term) // return the http search observable
			: Observable.of<Friend[]>([])
			.catch((error) =>
			{
				console.log(error);
				return Observable.of<Friend[]>([]);
			});// or the observable of empty friends if there was no search term
		})
	}

	gotoDetail(friend: Friend): void
	{
		let link = ["/detail", friend.id];
		this.router.navigate(link);
	}
}