import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-categories',
  imports: [FormsModule],
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

  selectedCategory:string='All';


  @Output()
  categoryChange:EventEmitter<string>=new EventEmitter<string>();

  onCategoryChange(){
    this.categoryChange.emit(this.selectedCategory);
  }

}
