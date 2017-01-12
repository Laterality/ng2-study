import { Component } from "@angular/core";

@Component(
	{
		selector: "app-root",
		template: 
		`<div>
		<child [name1]="fruit1" [name2]="fruit2()" [name3]="fruit3" [name4]="1+1" [name5]="fruit5" [name6]="fruit6"></child>
		</div>`,
		styles: [`div {border: 2px solid #666; padding: 10px; width: 400px; height: 250px;}`]
	}
)
export class ParentComponent
{
	fruit1 = "사과";

	fruit2()
	{
		return "배";
	}

	fruit3 = ["딸기", "포도", "참외"];

	static fruit5 = "수박";

	get fruit6()
	{
		return ParentComponent.fruit5
	}
}