import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeroesComponent} from "./heroes.component";
import {FormsModule} from "@angular/forms";
import {AppModule} from "../../../app.module";



@NgModule({
  declarations: [HeroesComponent],
  imports: [
    CommonModule,
    FormsModule,
    AppModule
  ],
  exports: [
    HeroesComponent
  ]
})
export class HeroesModule { }
