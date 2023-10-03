import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadImageComponent } from 'src/app/shared/components/upload-image/upload-image.component';

@Component({
  selector: 'app-banners-categories',
  templateUrl: './banners-categories.component.html',
  styleUrls: ['./banners-categories.component.css']
})
export class BannersCategoriesComponent {
  categorias = ['Tecnología y electrónico','Hogar','Muebles','Dormitorio','Deportes y Aire Libre','Mujer','Hombre','Mundo niño y juguetería','Belleza y Salud','Mundo escolar','Antiguedades y Arte','Jardín y terraza','Música y libros ','Otras Categorias'];

  constructor(private dialog: MatDialog) {
  }

  openImageDialog() {
    const dialogRef = this.dialog.open(UploadImageComponent,{
      data: {
        titulo: 'Subir imagen',
        tituloAlerta:'Guardado realizado',
        mensaje:'Imagen banner ha sido editado exitosamente ',
      }
    });
  }

  openIconDialog() {
    const dialogRef = this.dialog.open(UploadImageComponent,{
      data: {
        titulo: 'Subir icono',
        tituloAlerta:'Guardado realizado',
        mensaje:'Icono banner ha sido editado exitosamente ',
      }
    });
  }
}
