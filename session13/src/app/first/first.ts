import { Component } from '@angular/core';
import { Second } from '../second/second';
import { employee } from '../employee';
import { VisitingComponent } from '../visiting-component/visiting-component';

@Component({
  selector: 'app-first',
  imports: [VisitingComponent],
  templateUrl: './first.html',
  styleUrl: './first.css',
})
export class First {

  empInput:employee=new employee();

  constructor(){
    this.empInput.empName="Akhil Reddy";
    this.empInput.empSalary="50000";
    this.empInput.empDept="1";
    this.empInput.empAddress=["123 Main St","456 Oak St"];
    this.empInput.empPhones=[1234567890,9876543210];
  }

}
