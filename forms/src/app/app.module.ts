import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddFormComponent } from "./add-form.component";

@NgModule({
	declarations: [
		AppComponent,
		AddFormComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
