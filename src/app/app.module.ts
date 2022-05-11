import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeroesModule } from './core/components/heroes/heroes.module';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './core/components/hero-detail/hero-detail.component';
import { HeroDetailModule } from './core/components/hero-detail/hero-detail.module';

@NgModule({
  declarations: [
    AppComponent,
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
