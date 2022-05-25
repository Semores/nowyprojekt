import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './core/components/heroes/heroes.module';
import { MessagesComponent } from './core/components/messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {HttpClientModule} from "@angular/common/http";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from './in-memory-data.service';
import { HeroSearchComponent } from './core/components/hero-search/hero-search.component';

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false}
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
