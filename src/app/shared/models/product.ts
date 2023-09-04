import { Photos } from './photos';
import { SubCategory } from './subcategories';
export interface Product {
    id: number;
    title: string;
    subCategories: SubCategory[];
    tag: string; // ???
    location: string;
    description: string; 
    condition: string;
    price: number;
    photosUrl: Photos[];
  }