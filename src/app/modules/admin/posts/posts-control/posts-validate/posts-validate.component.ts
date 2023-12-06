import { Component, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ValidateComponent } from '../validate/validate.component';
import { MatDialog, } from '@angular/material/dialog';

@Component({
  selector: 'app-posts-validate',
  templateUrl: './posts-validate.component.html',
  styleUrls: ['./posts-validate.component.css']
})

export class PostsValidateComponent {


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

  displayedColumns: string[] = ['fecha', 'publicador', 'telefono', 'mail', 'publicacion' ,'validar'];

  
  constructor(
    private dialog: MatDialog,) {
  }

  openDialog() {
    const dialogRef = this.dialog.open(ValidateComponent);
  }

}

export class Solicitud {
  constructor(public fecha: string,public publicador: string,public telefono: string,public mail: string,public publicacion: string,public validar: string,) {
  }
}