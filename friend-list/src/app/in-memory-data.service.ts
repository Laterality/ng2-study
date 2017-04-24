import { InMemoryDbService } from "angular2-in-memory-web-api";

import { FRIENDS } from "./mock-friends";

export class InMemoryDataService implements InMemoryDbService
{
	createDb()
	{
		let friends = FRIENDS;
		return {friends};
	}
}