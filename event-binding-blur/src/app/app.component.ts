import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<input #box (keyup.enter)="update(box.value)"
	(blur)="update(box.value)">
	
	<p>{{value}}</p>`
})
export class AppComponent 
{
	value = "";

	update(value: string)
	{
		this.value = value;
	}
}
