import { ListadoComponent } from './Heroes/listado/listado.component';

import { HeroeComponent } from './Heroes/heroe/heroe.component';

import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';





@NgModule({

  declarations: [

    AppComponent,

    HeroeComponent,

    ListadoComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule

  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }