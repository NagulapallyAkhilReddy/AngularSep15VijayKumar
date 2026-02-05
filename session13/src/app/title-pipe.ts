import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'title'
})
export class TitlePipe implements PipeTransform {

  transform(name:string,gender:string): string {
    if (gender.toLocaleLowerCase() == "male") {
      name= "Mr. " + name;
    } else if (gender.toLocaleLowerCase() == "female") {
      name= "Ms. " + name;
    }
    return name;
    
  }

}
