import { Component } from '@angular/core';

import { Member } from "./member";

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<h2>My name is {{myName.name}}</h2>
	<p>members:</p>
	<ul>
		<li *ngFor="let member of members">
		{{member.name}}
		</li>
	</ul>
	<p *ngIf="members.length > 3">There are many members!</p>
	`
})
export class AppComponent 
{
	title = "Introduce";
	members = [
		new Member(1, "John"), 
		new Member(2, "James"), 
		new Member(3, "Yrina"), 
		new Member(4, "Ajay"), 
		new Member(5, "Gabe")
	];
	myName = this.members[0];
}
