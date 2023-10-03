import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent {


  vendedores: Vendedor[] = [
    new Vendedor('1', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('2', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('3', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('4', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('5', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('6', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('7', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('8', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('9', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('10', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('11', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('12', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('13', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('14', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
    new Vendedor('15', 'Rosa del Carmen López ', '+56912345678', 'Mart.yañez@mail.com', '22-09-2021', '150','02'),
  ];

  @ViewChild(MatTable) tabla1!: MatTable<Vendedor>;

  displayedColumns: string[] = ['numero', 'cliente', 'telefono', 'mail', 'fecha' ,'vendidos','saldos'];

}

export class Vendedor {
  constructor(public numero: string,public cliente: string,public telefono: string,public mail: string,public fecha: string,public vendidos: string,public saldos:string) {
  }
}