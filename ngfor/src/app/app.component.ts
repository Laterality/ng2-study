import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<h2>My name is {{myName}}</h2>
	<p>members:</p>
	<ul>
		<li *ngFor="let name of members">
		{{name}}
		</li>
	</ul>
	`
})
export class AppComponent 
{
	title = "Introduce";
	members = ["John", "James", "Yrina", "Ajay", "Gabe"];
	myName = "John";
}
