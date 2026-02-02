import { Component } from '@angular/core';
import { employee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  imports: [CommonModule],
  templateUrl: './employee-details.html',
  styleUrl: './employee-details.css',
})
export class EmployeeDetails {

  empInput:employee[]=[];
  ngOnInit(){

  this.empInput=[
      {
        empName:"Akhil Reddy",
        empSalary:"50000",
        empDept:"1",
        empAddress:["123 Main St","456 Oak St"],  
        empPhones:[1234567890,9876543210]
      },
      {
        empName:"John Doe",
        empSalary:"60000",
        empDept:"2",
        empAddress:["789 Pine St","101 Maple St"],  
        empPhones:[1122334455,5566778899]
      },
      {
        empName:"Jane Smith",
        empSalary:"55000",  
        empDept:"3",
        empAddress:["202 Birch St","303 Cedar St"],  
        empPhones:[9988776655,4433221100]
      }
    ]
  }

}
