import { Component } from '@angular/core';

@Component({
  selector: 'app-offers2',
  templateUrl: './offers2.component.html',
  styleUrls: ['./offers2.component.css']
})
export class Offers2Component {

  paginas = [1, 2, 3, 4, 5]

  seccionActual: string='Computación'

  paginaActual: number = 1;

  changePage(num: number)
  {
    this.paginaActual=num
  }

  prevPage()
  {
    if (this.paginaActual>1) {
      this.paginaActual=this.paginaActual-1  
    }   
    console.log(this.paginaActual)
  }

  nextPage()
  {
    if (this.paginaActual<this.paginas.length) {
      this.paginaActual=this.paginaActual+1 
    }     
    console.log(this.paginaActual)
  }

  changeSection(seccion: string)
  {
    this.seccionActual=seccion
  }

}
