import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- ngModule lives here
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';

import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- import the FormsModule before binding with [(ngModel)]
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
