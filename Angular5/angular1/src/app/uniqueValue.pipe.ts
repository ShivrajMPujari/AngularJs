import { Pipe , PipeTransform } from '@angular/core';
import { IProducts } from './product';

@Pipe({name :"unique"})
export class UniqueValuePipe implements PipeTransform{

    transform(value:IProducts[] , property:string ):string[]{

        var tempArray:string[] =[];

        for(var i=0; i<value.length ;i++){
         var temp = value[i].specs[property];
            if(tempArray.includes(temp)!=true){
                tempArray.push(temp);
            }

        }
        return tempArray
    }

}
