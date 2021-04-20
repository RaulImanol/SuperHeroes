import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {



  heroes: string[] = ['hulk','Saitama','Superman','Thor','Goku'];
  eliminar: string[] = [] ;
  acumulador:number = 5;
  indice:number = 0;


  removeItem(i: number){

    this.acumulador = this.acumulador--;
    this.indice=this.indice+i;
    this.eliminar = this.heroes.splice(i,1);


  }
}

