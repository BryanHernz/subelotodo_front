import { Component } from '@angular/core';
import { Product } from "../../shared/models/product";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  
  myValue= 0;

  product: Product = 
    {
      id: 1,
      title: 'Titulo',
      description: "Tiene 20 años, uso ocasional. Se realizó limpieza en cañón anual hasta 2021. Actualmente desinstalada. Incluye cañones para casa de 2 pisos, base acero Inox cuadrada para proteger el piso. Sirve para cualquier espacio del hogar.",
      subCategories: [],
      tag: 'Etiqueta', // ???
      location: 'Location',
      condition: 'Usado',
      price: 300000,
      photosUrl: 
      [
        {
          id:1,
          path:'assets/images/imagenes-productos/fotografi╠üa 1 estufa de len╠âa.jpg',
        },
        {
          id:2,
          path:'assets/images/imagenes-productos/fotografi╠üa 2 estufa de len╠âa.jpg',
        },
        {
          id:3,
          path:'assets/images/imagenes-productos/fotografi╠üa 3 estufa de len╠âa.jpg',
        },
        {
          id:4,
          path:'assets/images/imagenes-productos/fotografi╠üa 4 estufa de len╠âa.jpg',
        },
        {
          id:5,
          path:'assets/images/imagenes-productos/scantek-380-estufa-a-lena-amesti (1).jpg',
        },
        {
          id:6,
          path:'assets/images/imagenes-productos/scantek-380-estufa-a-lena-amesti.jpg',
        }
      ],
    };
  


}
