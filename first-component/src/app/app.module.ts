import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponent } from "./my-component.component"; // 컴포넌트 로드

@NgModule({
  declarations: [
    AppComponent,
	MyComponent // 컴포넌트 선언
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [MyComponent] // 이부분도 수정드
})
export class AppModule { }
