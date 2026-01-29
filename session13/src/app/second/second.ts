import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  imports: [],
  templateUrl: './second.html',
  styleUrl: './second.css',
})
export class Second {

  //Data Binding 

  //StringINterpolation

  //If we want to use Typescript data in HTML we can use string interpolation

  var_one="Welcome to Angular Session13";
  dateString="";
  userName:String="";
  firstName:String="";
  lastName:String="";
  email:String="";
  isDisabled: boolean;

  constructor() {
    //static data
    this.userName ="Akhil Reddy Nagulapally";
    this.firstName="Akhil";
    this.lastName ="Reddy";
    this.email="akhilreddynagulapally.nle@gmail.com";
    this.isDisabled=false;

    //Dynamic Data
    setInterval(()=>{
      let currentDate=new Date();
      this.dateString=currentDate.toDateString()+" "+currentDate.toTimeString();
      this.isDisabled=Math.random()>0.5?true:false;
    },1000);
    // let currentDate=new Date();
    // this.dateString=currentDate.toDateString()+" "+currentDate.toTimeString();
  }

}
