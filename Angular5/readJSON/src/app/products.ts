export interface IProducts{

    id:number;
    name:string;
    price:number;
    specs:SpecsItem;
    os:string;
    description:string;
    rating:string;
    image:ImageObj;

}
export class SpecsItem {

    manufacturer:string;
    storage:number;
    os:string;
    camera:number;
    
}
export class ImageObj {

    small:string;
    large:string;

}