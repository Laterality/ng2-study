import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ParentComponent } from "./parent.component";
import { ChildComponent } from "./child.component";

@NgModule({
  declarations: [
	ParentComponent,
	ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [ParentComponent]
})
export class AppModule { }