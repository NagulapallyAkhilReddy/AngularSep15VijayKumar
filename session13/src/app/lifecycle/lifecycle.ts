import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  imports: [],
  templateUrl: './lifecycle.html',
  styleUrl: './lifecycle.css',
})
export class Lifecycle implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{

  order=1;
  constructor(){

    console.log(`Constructor called - Order: ${this.order++}`);

  }

  ngOnInit(): void {
    console.log(`ngOnInit called - Order: ${this.order++}`);
  }

  ngOnChanges(): void {
    console.log(`ngOnChanges called - Order: ${this.order++}`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck called - Order: ${this.order++}`);
  } 

  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit called - Order: ${this.order++}`);
  }

  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked called - Order: ${this.order++}`);
  }

  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit called - Order: ${this.order++}`);
  }

  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked called - Order: ${this.order++}`);
  }

  ngOnDestroy(): void {
    console.log(`ngOnDestroy called - Order: ${this.order++}`);
  }

  

}
