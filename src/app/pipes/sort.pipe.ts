import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {

  transform(value: Array<string>, ascOrDesc:string , sortType:string): any[] {
    //let res = [];
    let mul = 1;
    if(ascOrDesc.toLowerCase() == 'desc'){

      mul = -1;
    }
      value.sort((op1:any , op2:any) =>{
        if(op1[sortType] <op2[sortType]){
          return  -1*mul;
        }else if(op1[sortType] > op2[sortType]){
          return 1*mul;
        }else{
          return 0;
        }
     });


    return value;
  }


}
