import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string): number {
    let currentYear=new Date().getFullYear();
    let inputYear=new Date(value).getFullYear();
    return currentYear-inputYear;
  }

}
