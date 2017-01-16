import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<input #box (keyup.enter)="onEnter(box.value)">
	<p>{{value}}</p>`
})
export class AppComponent {
	value = "";
	
	onEnter(value: string)
	{
		this.value = value;
	}
}
