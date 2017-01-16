import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template:`
	<button (click)="onClick()">Click me!</button>
	{{clickMessage}}
	`
})
export class AppComponent {
	clickMessage = "";

	onClick()
	{
		this.clickMessage = "Clicked!";
	}
}
