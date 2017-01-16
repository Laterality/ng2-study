import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<h1>{{title}}</h1>
	<h2>My name is {{name}}</h2>
	`
})
export class AppComponent {
	title = "Introduce";
	name = "John";
}
