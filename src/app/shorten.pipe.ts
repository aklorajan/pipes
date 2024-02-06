import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform{
  transform(value: any, i:number): any {
    if (value.length > i){
      return value.substr(0, i ) + ' ***'
    }else {
      return value
    }
  }

}
