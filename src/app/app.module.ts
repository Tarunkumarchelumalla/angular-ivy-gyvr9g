import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { TestComponent } from './test/test.component';
import { Empservice } from './employee.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, TestComponent],
  bootstrap: [AppComponent],
  providers: [Empservice],
})
export class AppModule {}
