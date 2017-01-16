import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	template: `
	<input #newName
	(keyup.enter)="addName(newName.value)"
	(blur)="addName(newName.value); newName.value=''">
	
	<button (click)=addName(newName.value)>추가</button>
	
	<ul>
		<li *ngFor="let member of members">{{member}}</li>
	</ul>`
})
export class AppComponent 
{
	members = ["John", "James", "Yrina", "Ajay", "Gabe"];
	
	addName(name : string)
	{
		if(name)
		{
			this.members.push(name);
		}
	}
}
