import { Component, Inject, Input, OnInit } from '@angular/core';
import { ProductImageModel } from 'src/app/models/productImage';

@Component({
  selector: 'app-swiper-gallery',
  templateUrl: './swiper-gallery.component.html',
  styleUrls: ['./swiper-gallery.component.css']
})
export class SwiperGalleryComponent implements OnInit {

  imagenes:ProductImageModel[]=[];
  imagenActual: String='';
  
  ruta:string='http://localhost:8000/'

  @Input({ required: true })
  data: ProductImageModel[] = [];

  ngOnInit(): void {
    this.imagenes=this.data;
    this.imagenActual= this.ruta+this.imagenes.at(0)?.filePath;
  }

  
  changeImage(image: string)
  {
    this.imagenActual=image;  
  }
}
