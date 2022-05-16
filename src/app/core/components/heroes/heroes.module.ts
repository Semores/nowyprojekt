import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesComponent} from "./heroes.component";
import {FormsModule} from "@angular/forms";
import {HeroDetailModule} from "../hero-detail/hero-detail.module";
import {AppRoutingModule} from "../../../app-routing.module";



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    HeroDetailModule,
    AppRoutingModule
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
