import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { SalesRegisterSeeMoreComponent } from '../sales-register-see-more/sales-register-see-more.component';

@Component({
  selector: 'app-sales-register',
  templateUrl: './sales-register.component.html',
  styleUrls: ['./sales-register.component.css']
})
export class SalesRegisterComponent {

  solicitudes: Solicitud[] = [
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
    new Solicitud('22.10.2023', 'María Carmen de la Manzana', '+56912345678', 'Maria.Carmen.M@gmail.com', 'Manta de lycra, dos plazas, con nueva...', 'Ver más'),
  ];

  @ViewChild(MatTable) tabla1!: MatTable<Solicitud>;

  displayedColumns: string[] = ['fecha', 'publicador', 'telefono', 'mail', 'publicacion' ,'informacion'];

  
  constructor(
    private dialog: MatDialog,) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(SalesRegisterSeeMoreComponent);
  }

}

export class Solicitud {
  constructor(public fecha: string,public publicador: string,public telefono: string,public mail: string,public publicacion: string,public informacion: string,) {
  }
}