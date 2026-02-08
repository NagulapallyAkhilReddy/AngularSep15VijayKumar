import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-count',
  imports: [FormsModule],
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

  radioButtonValue:string='all';

  @Output()
  countRadioButtonChange:EventEmitter<string>=new EventEmitter<string>();


  onRadioButtonChange(){
    this.countRadioButtonChange.emit(this.radioButtonValue);
  }

}
