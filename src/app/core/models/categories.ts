import { SubCategory } from "./subcategories";

export interface Category{
    id: string;
    name: string;
    subCategories: SubCategory[];
}