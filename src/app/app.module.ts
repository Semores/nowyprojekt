import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './core/components/heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './core/components/hero-detail/hero-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  exports: [
    HeroDetailComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
