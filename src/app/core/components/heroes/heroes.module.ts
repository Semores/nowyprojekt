import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesComponent} from "./heroes.component";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../../../app.module";
import {HeroDetailModule} from "../hero-detail/hero-detail.module";



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailModule,
    //   AppModule // <-importowanie  AppModule powoduje circular dependency
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
