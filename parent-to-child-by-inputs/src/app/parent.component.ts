import { Component } from "@angular/core";

@Component(
	{
		selector: "app-root",
		template: 
		`<div>부모
		<child [name1]="var1" [name2]="var2"></child>
		</div>`,
		styles: [`div {border: 2px solid #666; padding: 10px; width: 400px; height: 200px;}`]
	}
)
export class ParentComponent
{
	var1 = "사과";
	var2 = "청포도";
}