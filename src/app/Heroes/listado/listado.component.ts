import { Component} from '@angular/core';



@Component({

  selector: 'app-listado',

  templateUrl: './listado.component.html',

  styleUrls: ['./listado.component.css']

})

export class ListadoComponent {



  heroes: string[] = ['hulk', 'Saitama', 'Superman', 'thor', 'goku'];

  borrarheroes(): string {
 return this.heroes= '';
  }

    




}