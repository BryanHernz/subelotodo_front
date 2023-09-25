import { Commune } from "./communes";

export interface Region{
    id: string;
    name: string;
    communes: Commune[];
}