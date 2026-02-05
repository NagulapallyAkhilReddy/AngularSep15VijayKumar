import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReversePipe } from '../reverse-pipe';
import { AgePipe } from '../age-pipe';

@Component({
  selector: 'app-default-pipe',
  imports: [CommonModule,ReversePipe,AgePipe],
  templateUrl: './default-pipe.html',
  styleUrl: './default-pipe.css',
})
export class DefaultPipe {

  var1:string="Hello Angular Developers";
  var2:number=123456789.1234;
  var3:number=0.8567;
  var4:Date=new Date();   
  var5:string="akhil reddy here";
  var6:string="03/05/1999"
  var7:any={name:"Akhil"}


}
