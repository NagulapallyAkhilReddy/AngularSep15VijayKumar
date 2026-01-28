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

  constructor() {
    //static data
    this.userName ="Akhil Reddy Nagulapally";
    this.firstName="Akhil";
    this.lastName ="Reddy";
    this.email="akhilreddynagulapally.nle@gmail.com";

    //Dynamic Data
    setInterval(()=>{
      let currentDate=new Date();
      this.dateString=currentDate.toDateString()+" "+currentDate.toTimeString();
    },1000);
    // let currentDate=new Date();
    // this.dateString=currentDate.toDateString()+" "+currentDate.toTimeString();
  }

}
