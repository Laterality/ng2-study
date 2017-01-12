import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { GrandsonComponent } from "./grandson.component";
import { ChildComponent } from "./child.component";
import { ParentComponent } from "./parent.component";

@NgModule({
  declarations: [
	GrandsonComponent,
	ChildComponent,
	ParentComponent
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
