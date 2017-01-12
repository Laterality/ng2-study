import { Component } from "@angular/core";

@Component(
	{
		selector: "child",
		template: 
		`<div>자식 컴포넌트
		<grandson></grandson>
		</div>`,
		styles: ["div {border: 2px dotted #666; padding: 10px; margin-top: 5px; width: 75%; height: 75%;}"]
	}
)
export class ChildComponent {}