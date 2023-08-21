import { Component } from '@angular/core';
import { Category } from "../models/categories";
import { SubCategory } from "../models/subcategories";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  status = false;
  menuOpen: boolean = false;
  addToggle()
  {
    this.status = !this.status;       
  }

  toggleMenu() {
    console.log('aqui');
    
    this.menuOpen = !this.menuOpen;
  }

  categories: Category [] = [
    {
      id:'1',
      name:'Tecnologia y electrónica',
      logo:"assets/images/iconos-categorias/tecnologi╠üa y electro╠ünica.svg",
      subCategories:[
        {
        id:'1',
        name:'Celulares y Tablets',
        },
        {
          id:'2',
          name:'Televisores',
        },
        {
          id:'3',
          name:'Audio',
        },
        {
          id:'4',
          name:'Computación',
        },
        {
          id:'5',
          name:'VideoJuegos',
        },
        {
          id:'6',
          name:'Smart Home',
        },
        {
          id:'7',
          name:'Fotografía',
        },
      ]
    },
    {
      id:'2',
      name:'Hogar',
      logo:"assets/images/iconos-categorias/hogar.svg" ,
      subCategories:[
        {
          id:'1',
          name:'Electrodomésticos',
        },
        {
          id:'2',
          name:'Linea Blanca',
        },
        {
          id:'3',
          name:'Aire acondicionado y calefacción',
        },
        {
          id:'4',
          name:'Menaje',
        },
        {
          id:'5',
          name:'Decoración e Iluminación',
        },
      ],
    },
    {
      id:'3',
      name:'Muebles',
      logo:"assets/images/iconos-categorias/muebles.svg" ,
      subCategories:[
        {
          id:'1',
          name:'Comedor',
        },
        {
          id:'2',
          name:'Living',
        },
        {
          id:'3',
          name:'Terraza',
        },
        {
          id:'4',
          name:'Otros',
        },
      ],
    },
    {
      id:'4',
      name:'Domitorio',
      logo:"assets/images/iconos-categorias/dormitorio.svg" ,
      subCategories:[
        {
          id:'1',
          name:'Camas',
        },
        {
          id:'2',
          name:'Respaldos',
        },
        {
          id:'3',
          name:'Colchones',
        },
        {
          id:'4',
          name:'Ropa de Cama',
        },
        {
          id:'5',
          name:'Escritorios y sillas',
        },
        {
          id:'6',
          name:'Muebles de Dormitorio',
        },
      ],
    },
    {
      id:'5',
      name:'Deportes y Aire Libre',
      logo:"assets/images/iconos-categorias/deporte y aire libre.svg" ,
      subCategories:[
        {
          id:'1',
          name:'Ropa deportiva'
        },
        {
          id:'2',
          name:'Bicicletas y Scooters'
        },
        {
          id:'3',
          name:'Camping'
        },
        {
          id:'4',
          name:'Fitness'
        },
        {
          id:'5',
          name:'Maletas'
        },
        {
          id:'6',
          name:'Accesorios'
        },
      ],
    },
    {
      id:'6',
      name:'Mujer',
      logo:"assets/images/iconos-categorias/mujer.svg" ,
      subCategories:[
        {
          id:'1',
          name:'Vestuario'
        },
        {
          id:'2',
          name:'Calzado'
        },
        {
          id:'3',
          name:'Joyeria'
        },
        {
          id:'4',
          name:'Accesorios'
        },
      ],
    },
    {
      id:'7',
      name:'Hombre',
      logo:"assets/images/iconos-categorias/Hombre.svg" ,
      subCategories:[
        {
          id:'1',
          name:'Vestuario'
        },
        {
          id:'2',
          name:'Calzado'
        },
        {
          id:'3',
          name:'Accesorios'
        },
      ],
    },
    {
      id:'8',
      name:'Mundo niños y juguetería',
      logo:"assets/images/iconos-categorias/mundo nin╠âo y jugueteria.svg" ,
      subCategories:[
        {
          id:'1',
          name:'Vestuario'
        },
        {
          id:'2',
          name:'Juguetes y juegos de mesa'
        },
        {
          id:'3',
          name:'Coches y sillas'
        },
      ],
    },
    {
      id:'9',
      name:'Belleza y Salud',
      logo:"assets/images/iconos-categorias/belleza y salud.svg",
      subCategories:[
        {
          id:'1',
          name:'Perfumes'
        },
        {
          id:'2',
          name:'Dermocosmetica'
        },
        {
          id:'3',
          name:'Bienestar '
        },
        {
          id:'4',
          name:'Salud'
        },
      ],
    },
    {
      id:'10',
      name:'Mundo escolar',
      logo:"assets/images/iconos-categorias/mundo escolar.svg",
      subCategories:[
        {
          id:'1',
          name:'Libros Escolares'
        },
        {
          id:'2',
          name:'Articulos escolares'
        },
        {
          id:'3',
          name:'Uniformes'
        },
      ],
    },
    {
      id:'11',
      name:'Antiguedades y arte',
      logo:"assets/images/iconos-categorias/antiguedades y arte.svg",
      subCategories:[
        {
          id:'1',
          name:'Muebles'
        },
        {
          id:'2',
          name:'Cuadros'
        },
        {
          id:'3',
          name:'Menaje'
        },
        {
          id:'4',
          name:'Accesorios'
        },
      ],
    },
    {
      id:'12',
      name:'Jardín y Terraza',
      logo:"assets/images/iconos-categorias/jardi╠ün y terraza.svg",
      subCategories:[
        {
          id:'1',
          name:'Parrillas y Asadores'
        },
        {
          id:'2',
          name:'Herramientas'
        },
        {
          id:'3',
          name:'Plantas'
        },
        {
          id:'4',
          name:'Mundo Piscina'
        },
        {
          id:'5',
          name:'Juegos de exterior'
        }
      ],
    },
    {
      id:'13',
      name:'Música y Libros',
      logo:"assets/images/iconos-categorias/mu╠üsica y libros.svg",
      subCategories:[
        {
          id:'1',
          name:'Instrumentos musicales'
        },
        {
          id:'2',
          name:'Libros'
        },
        {
          id:'3',
          name:'Música '
        },
      ],
    },
    {
      id:'14',
      name:'Otras Categorias',
      logo:"assets/images/iconos-categorias/otras categorii╠üas.svg",
      subCategories:[
        {
          id:'1',
          name:'Mascotas'
        },
        {
          id:'2',
          name:'Otros'
        },
      ],
    },
  ];
}
