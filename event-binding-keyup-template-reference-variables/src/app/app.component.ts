import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<input #box (keyup)="onKey(box.value)">
	<p>{{values}}</p>`
})
export class AppComponent {
	values = "";

	onKey(value: string)
	{
		this.values += value + " | ";
	}
}
