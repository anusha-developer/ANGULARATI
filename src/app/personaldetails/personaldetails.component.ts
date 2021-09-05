import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personaldetails',
  templateUrl: './personaldetails.component.html',
  styleUrls: ['./personaldetails.component.css']
})
export class PersonaldetailsComponent implements OnInit {

  FirstName:string="";
  LastName:string="";
  martiualstatus:string="";
  email:string="";
  PassWord:string="";
  phoneno:string="";
  landlineno:string="";
  PanNo:string="";
  adharno:string="";
  bankno:string="";
  bloodGroup:string="";
  Perstreet:string="";
  Percity:string="";
  Perdistrict:string="";
  Perstate:string="";
  Percountry:string="";
  Perpincode:string="";
  Perlandmark:string="";
  Temphno:string="";
  Tempstreet:string="";
  Tempdistrict:string="";
  TempState:string="";
  TempCountry:string="";
  TempPincode:string="";
  TempLandmark:string="";
  msg: string | undefined;


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert("ATI-Project");
  }
  Test() {
   alert("submitted")
    var num1 = ((document.getElementById("exchageRateDate") as HTMLInputElement).value);
    console.log(num1);
}
onRegisterclick()
{
    this.msg="FirstName:" + this.FirstName+ "<br>LastName:"+ this.LastName +"<br>martiualstatus:"+this.martiualstatus+"<br>email:"+this.email
    +"<br>PassWord:"+this.PassWord +"<br>phoneno:"+this.phoneno +"<br>Landlineno:"+this.landlineno +"<br>panno:"+this.PanNo    ;

  
 
}
}
