import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/map";

import { Friend } from "./friend";

@Injectable()
export class FriendSearchService
{
	constructor(private http: Http)
	{

	}

	search(term: string): Observable<Friend[]>
	{
		return this.http.get(`app/friends/?name=${term}`)
		.map((response) =>
		{
			return response.json().data as Friend[];
		})
	}
}