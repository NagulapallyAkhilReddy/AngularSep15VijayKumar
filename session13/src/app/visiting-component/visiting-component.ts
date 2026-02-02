import { Component, Input } from '@angular/core';
import { employee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visiting-component',
  imports: [CommonModule],
  templateUrl: './visiting-component.html',
  styleUrl: './visiting-component.css',
})
export class VisitingComponent {

  employees:employee[]=[];

  @Input ('empObj') empObj:employee[]=[];

  ngOnInit(){
    // this.employees=[
    //   {empName:this.empObj.empName,
    //   empSalary:this.empObj.empSalary,
    //   empDept:this.empObj.empDept,
    //   empAddress:this.empObj.empAddress,
    //   empPhones:this.empObj.empPhones},
    //   {empName:"John Doe",
    //   empSalary:"60000",
    //   empDept:"2",
    //   empAddress:["789 Pine St","101 Maple St"],
    //   empPhones:[1122334455,5566778899]},
    //   {empName:"Jane Smith",
    //   empSalary:"55000",
    //   empDept:"3",
    //   empAddress:["202 Birch St","303 Cedar St"],
    //   empPhones:[9988776655,4433221100]}

    // ]
    this.employees=this.empObj;
  }


}
