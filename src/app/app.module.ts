import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestDirective } from './test.directive';
import { NewComponent } from './new/new.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';


@NgModule({
  declarations: [
    AppComponent,
    TestDirective,
    NewComponent,
    FirstComponent,
    SecondComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, NewComponent]
})
export class AppModule { }
