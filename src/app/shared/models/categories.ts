import { SubCategory } from "./subcategories";

export interface Category{
    id: string;
    name: string;
    logo: string;
    subCategories: SubCategory[];
}