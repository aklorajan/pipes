import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterStatus:string, status:string): any {
  if (value.length === 0 || filterStatus === ''){
    return value
  }
  const inputArray = []
    for (let item of value){
      if (item['status'] === filterStatus){
        inputArray.push(item)
      }
    }
    return inputArray
  }

}
