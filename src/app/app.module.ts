import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './core/components/heroes/heroes.module';
import { MessagesComponent } from './core/components/messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HeroesComponent} from "./core/components/heroes/heroes.component";

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    HeroesComponent,
    //    HeroDetailComponent,// <- to powinieneś dodać do HeroDetailModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
  ],
  providers: [],
  // exports: [
  //   HeroDetailComponent // <- to powinieneś dodać do HeroDetailModule
  // ],
  bootstrap: [AppComponent],
})
export class AppModule {}
