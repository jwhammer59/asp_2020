import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';

import { PrimeModule } from 'src/app/prime/prime.module';

@NgModule({
  declarations: [HeaderComponent, HomeComponent, NavComponent],
  imports: [CommonModule, PrimeModule],
  exports: [HeaderComponent, HomeComponent, NavComponent, PrimeModule],
})
export class SharedModule {}
