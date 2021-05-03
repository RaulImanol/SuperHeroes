import { Component, OnInit } from '@angular/core';
import { Villano } from './villano';
@Component({
 selector: 'app-villano',
 templateUrl: './villano.component.html',
 styleUrls: ['./villano.component.css']
})
export class VillanoComponent implements OnInit {

selectedVillano?: Villano;
villanos: Villano[]=[
 {id:1, name: "REVOLVER OCELOT", nivel: 700, namepower: "REVOLVER"},
 {id:2, name: "HITLER", nivel: 100, namepower: "HORNOS"},
 {id:3, name: "BOROS", nivel:10000, namepower: "SUPER REGENERACION"},
 {id:4, name: "LORD VOLDEMORT", nivel:2000, namepower: "MAGIA"},
 {id:5, name: "XERXERS", nivel:300, namepower: "PREDICCION"},
];
 numero = 0;
 base = 500;
 constructor() { }
 ngOnInit() {
 }
 onSelect(villano: Villano): void {
 this.selectedVillano = villano;
 }
 acumulador(valor:number){
 this.numero += valor;
 }
 sumar(){
 this.numero +=1;
 }
 restar(){
 this.numero -=1;
 }
}
