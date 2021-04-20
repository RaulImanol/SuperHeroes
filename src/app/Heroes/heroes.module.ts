import { ListadoComponent } from './listado/listado.component';
import { HeroeComponent } from './heroe/heroe.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  exports: [
    ListadoComponent,
    HeroeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule{}