import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from './hero-detail.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [HeroDetailComponent],
  imports: [CommonModule, FormsModule],
  exports: [HeroDetailComponent],
})
export class HeroDetailModule {}
