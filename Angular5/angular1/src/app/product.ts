import { SpecsItem } from './specsItem';
import { ImageObj } from './imgProduct';
export interface IProducts{

    id:number;
    name:string;
    price:number;
    specs:SpecsItem;
    description:string;
    rating :number;
    image:ImageObj;
}


