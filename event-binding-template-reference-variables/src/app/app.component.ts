import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<input #box (keyup)="0">
	<p>{{box.value}}</p>`
})
export class AppComponent {  }
