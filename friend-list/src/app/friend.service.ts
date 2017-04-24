import { Injectable } from "@angular/core"
import { Headers, Http } from "@angular/http";

import "rxjs/add/operator/toPromise";

import { Friend } from "./friend";
import { FRIENDS } from "./mock-friends";

@Injectable()
export class FriendService
{
	private friendUrl = "api/friends";
	private headers = new Headers({"Content-Type": "application/json"});

	constructor(private http: Http)
	{
		
	}

	getFriends(): Promise<Friend[]>
	{
		return this.http.get(this.friendUrl)
		.toPromise()
		.then((response) =>
		{
			return response.json().data as Friend[];
		})
		.catch(this.handleError);
	}

	getFriend(id: number): Promise<Friend>
	{
		const url = `${this.friendUrl}/${id}`;
		return this.http.get(url)
		.toPromise()
		.then((response) =>
		{
			return response.json().data as Friend;
		})
		.catch(this.handleError);
	}

	update(friend: Friend): Promise<Friend>
	{
		const url = `${this.friendUrl}/${friend.id}`;
		return this.http.put(url, JSON.stringify(friend), {headers: this.headers})
		.toPromise()
		.then(() =>
		{
			return friend;
		})
		.catch(this.handleError);
	}

	create(name: string): Promise<Friend>
	{
		return this.http.post(this.friendUrl, JSON.stringify({name: name}), {headers: this.headers})
		.toPromise()
		.then((res) =>
		{
			return res.json().data;
		})
		.catch(this.handleError);
	}

	delete(id: number): Promise<void>
	{
		const url = `${this.friendUrl}/${id}`;
		return this.http.delete(url, {headers: this.headers})
		.toPromise()
		.then(() => {return null;})
		.catch(this.handleError);
	}

	private handleError(error: any): Promise<any>
	{
		console.error("An error occurred", error);
		return Promise.reject(error.message || error);
	}
}