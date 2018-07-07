import { Pipe , PipeTransform } from '@angular/core';

@Pipe({ name: 'datePipe'})
export class PipeForDate implements PipeTransform {

    transform(value:string[] , newValue:string  ):string[]{
        var strArray:string[]= [];
        for(var i=0;i<value.length;i++){
            if(strArray.includes(value[i])!=true){
                strArray.push(value[i]);
            }
        }
        return strArray;
    }
}