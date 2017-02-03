import { Component } from "@angular/core";

import { Person } from "./person";

@Component(
	{
		moduleId: module.id,
		selector: "add-form",
		templateUrl: "add-form.component.html"
	}
)
export class AddFormComponent
{

	mailHosts = ["bmail.com", "wave.net", "sweetter.com"];

	model = new Person(12, "John Smith", "Baker201", "jsmith21", "sweetter.com");
	submitted = false;

	onSubmit()
	{
		this.submitted = true;
	}

	get diagnostic()
	{
		return JSON.stringify(this.model);
	}

	newMember()
	{
		this.model = new Person(13, "", "");
	}
}