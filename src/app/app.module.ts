import { HeroesModule } from './Heroes/heroes.module';
import { ContadorComponent } from './contador/contador.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VillanoComponent } from './villano/villano.component';


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    VillanoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }