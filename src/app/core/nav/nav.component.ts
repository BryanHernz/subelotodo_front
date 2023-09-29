import { Component } from '@angular/core';
import { Category } from "../../shared/models/categories";
import { SubCategory } from "../../shared/models/subcategories";
import { Region } from 'src/app/shared/models/regions';
import { Commune } from 'src/app/shared/models/communes';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  status = false;
  menuOpen: boolean = false;
  regiones: boolean = false;
  sellerLogged: boolean = false;
  sellerMenuOpen: boolean = false;

  sellerMode()
  {
    this.sellerLogged = true;       
  }

  addToggle()
  {
    this.status = !this.status;       
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.regiones = false;
  }

  toggleSellerMenu() {
    this.sellerMenuOpen = !this.sellerMenuOpen;
  }

  toggleSwitch() {
    this.regiones = !this.regiones;
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

  regions: Region [] = [
    {
      id:'1',
      name:'Región Arica y Parinacota',
      communes:[
        {
        id:'1',
        name:'Arica',
        },
        {
          id:'2',
          name:'Putre',
        },
      ]
    },
    {
      id:'2',
      name:'Región de Tarapacá',
      communes:[
        {
        id:'1',
        name:'Gran Iquique',
        },
        {
          id:'2',
          name:'Pozo Almonte',
        },
      ]
    },
    {
      id:'3',
      name:'Región de Antofagasta',
      communes:[
        {
        id:'1',
        name:'Antofagasta',
        },
        {
          id:'2',
          name:'Mejillones',
        },
        {
          id:'3',
          name:'Taltal',
        },
        {
        id:'4',
        name:'Calama',
        },
        {
          id:'5',
          name:'San Pedro de Atacama',
        },
        {
          id:'6',
          name:'Tocopilla',
        },
      ]
    },
    {
      id:'4',
      name:'Región de Atacama',
      communes:[
        {
        id:'1',
        name:'Copiapó',
        },
        {
          id:'2',
          name:'Caldera',
        },
        {
          id:'3',
          name:'Tierra Amarilla',
        },
        {
        id:'4',
        name:'Chañaral',
        },
        {
          id:'5',
          name:'Diego de Almagro',
        },
        {
          id:'6',
          name:'El salvador',
        },
      ]
    },
    {
      id:'5',
      name:'Región de Coquimbo',
      communes:[
        {
        id:'1',
        name:'La Serena',
        },
        {
          id:'2',
          name:'Tongoy',
        },
        {
          id:'3',
          name:'Los Vilos',
        },
        {
          id:'4',
          name:'Salamanca',
        },
        {
          id:'5',
          name:'Ovalle',
        },
      ]
    },
    {
      id:'6',
      name:'Región de Valparaíso',
      communes:[
        {
        id:'1',
        name:'Valparaíso',
        },
        {
          id:'2',
          name:'Viña del Mar',
        },
        {
          id:'3',
          name:'Concón',
        },
        {
          id:'4',
          name:'Casablanca',
        },
        {
          id:'5',
          name:'Juan Fernández',
        },
        {
          id:'6',
          name:'Los Andes',
        },
        {
          id:'7',
          name:'La Ligua',
        },
        {
          id:'8',
          name:'Quillota',
        },
        {
          id:'9',
          name:'San Antonio',
        },
        {
          id:'10',
          name:'San Felipe',
        },
        {
          id:'11',
          name:'Llayllay',
        },
        {
          id:'12',
          name:'Limache - Olmué',
        },
      ]
    },
    {
      id:'7',
      name:"Región Libertador General Bernardo O'Higgins",
      communes:[
        {
        id:'1',
        name:'Rancagua',
        },
        {
          id:'2',
          name:'Graneros',
        },
        {
          id:'3',
          name:'San Francisco de Mostazal',
        },
        {
          id:'4',
          name:'Rengo',
        },
        {
          id:'5',
          name:'Pichilemu',
        },
        {
          id:'6',
          name:'Chimbarongo',
        },
      ]
    },
    {
      id:'8',
      name:'Región del Maule',
      communes:[
        {
        id:'1',
        name:'Talca',
        },
        {
          id:'2',
          name:'Constitución',
        },
        {
          id:'3',
          name:'Maule',
        },
        {
          id:'4',
          name:'Curicó',
        },
        {
          id:'5',
          name:'Linares',
        },
      ]
    },
    {
      id:'9',
      name:'Región de Ñuble',
      communes:[
        {
        id:'1',
        name:'Chillán',
        },
        {
          id:'2',
          name:'Bulnes',
        },
        {
          id:'3',
          name:'Quillón',
        },
        {
          id:'4',
          name:'San Carlos',
        },
      ]
    },
    {
      id:'10',
      name:'Región del Biobío',
      communes:[
        {
        id:'1',
        name:'Concepción',
        },
        {
          id:'2',
          name:'Coronel',
        },
        {
          id:'3',
          name:'Lota',
        },
        {
          id:'4',
          name:'Tomé',
        },
        {
          id:'5',
          name:'Cañete',
        },
        {
          id:'6',
          name:'Los Angeles',
        },
        {
          id:'7',
          name:'Yumbel',
        },
      ]
    },
    {
      id:'11',
      name:'Región de la Araucanía',
      communes:[
        {
        id:'1',
        name:'Temuco',
        },
        {
          id:'2',
          name:'Gorbea',
        },
        {
          id:'3',
          name:'Pucón',
        },
        {
          id:'4',
          name:'Vilcún',
        },
        {
          id:'5',
          name:'Villarrica',
        },
        {
          id:'6',
          name:'Angol',
        },
        {
          id:'7',
          name:'Victoria',
        },
      ]
    },
    {
      id:'12',
      name:'Región de los Ríos',
      communes:[
        {
        id:'1',
        name:'Valdivia',
        },
        {
          id:'2',
          name:'Los Lagos',
        },
        {
          id:'3',
          name:'Panguipulli',
        },
        {
          id:'4',
          name:'La Unión',
        },
      ]
    },
    {
      id:'13',
      name:'Región de los Lagos',
      communes:[
        {
        id:'1',
        name:'Puerto Montt',
        },
        {
          id:'2',
          name:'Calbuco',
        },
        {
          id:'3',
          name:'Frutillar',
        },
        {
          id:'4',
          name:'Llanquihue',
        },
        {
        id:'5',
        name:'Castro',
        },
        {
          id:'6',
          name:'Ancud',
        },
        {
          id:'7',
          name:'Quellón',
        },
        {
          id:'8',
          name:'Osorno',
        },
      ]
    },
    {
      id:'14',
      name:'Región de Aysén',
      communes:[
        {
        id:'1',
        name:'Coyhaique',
        },
        {
          id:'2',
          name:'Puerto Aysén',
        },
        {
          id:'3',
          name:'Chile Chico',
        },
      ]
    },
    {
      id:'15',
      name:'Región de Magallanes y de la Antártica Chilena',
      communes:[
        {
        id:'1',
        name:'Punta Arenas',
        },
        {
          id:'2',
          name:'Puerto Williams',
        },
        {
          id:'3',
          name:'Puerto Natales',
        },
      ]
    },
    {
      id:'16',
      name:'Región Metropolitana',
      communes:[
        {
        id:'1',
        name:'Gran Santiago',
        },
        {
          id:'2',
          name:'San José de Maipo',
        },
        {
          id:'3',
          name:'Colina',
        },
        {
          id:'4',
          name:'Tiltil',
        },
        {
        id:'5',
        name:'Buin',
        },
        {
          id:'6',
          name:'Paine',
        },
        {
          id:'7',
          name:'Melipilla',
        },
        {
          id:'8',
          name:'Talagante',
        },
      ]
    },
  ];
}
