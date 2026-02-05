import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categories',
  imports: [],
  templateUrl: './categories.html',
  styleUrl: './categories.css',
})
export class Categories {

  @Input()
  All:number=50;
  @Input()
  Electronics:number=10;
  @Input()
  Accessories:number=20;
  @Input()
  Wearables:number=15;
  @Input()
  Networking:number=5;

}
