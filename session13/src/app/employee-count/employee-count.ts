import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  imports: [],
  templateUrl: './employee-count.html',
  styleUrl: './employee-count.css',
})
export class EmployeeCount {

  @Input()
  all:number=20;

  @Input()
  male:number=10;

  @Input()
  female:number=10;

}
