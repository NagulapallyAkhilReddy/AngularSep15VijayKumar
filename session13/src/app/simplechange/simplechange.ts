import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-simplechange',
  imports: [],
  templateUrl: './simplechange.html',
  styleUrl: './simplechange.css',
})
export class Simplechange implements OnChanges {

  @Input()
  simpleInput:string='';
  @Input()
  anotherInput:string='';


  ngOnChanges(changes: SimpleChanges): void {
    for(let propName in changes){
      let change=changes[propName];
      let current=JSON.stringify(change.currentValue);
      let previous=JSON.stringify(change.previousValue);
      console.log(`Property Name: ${propName}, Current Value: ${current}, Previous Value: ${previous}`);
    }
  }
}
