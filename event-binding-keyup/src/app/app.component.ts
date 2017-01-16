import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<input (keyup)="onKey($event)">
	<p>{{values}}</p>`
})
export class AppComponent {
	values = "";

	onKey(event: any)
	{
		this.values += event.target.value + " | ";
	}
}
