import { Component } from "@angular/core";

@Component(
	{
		selector: "app-root", // index.html 파일을 별도로 수정하지 않기 위해 app-root 태그를 그대로 사용합니다
		template: 
		`<div>부모
		<child></child>
		</div>`,
		styles: ["div {border: 2px solid #666; padding: 10px; width: 400px; height: 200px;}"]
	}
)
export class ParentComponent {}