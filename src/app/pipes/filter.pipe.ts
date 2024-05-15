import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true
})
export class FilterPipe implements PipeTransform {

  transform(value:any[],filterString:string , propsName:string): any[] {
    const res = [];
    if(value.length === 0 || filterString === '' || propsName === ''){
      return value;
    }

    for(const item of value){
      if(item[propsName] === filterString){
        res.push(item);
      }
    }

    return res;
  }

}
