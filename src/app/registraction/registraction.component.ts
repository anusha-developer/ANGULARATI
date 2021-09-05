import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registraction',
  templateUrl: './registraction.component.html',
  styleUrls: ['./registraction.component.css']
})
export class RegistractionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnSubmit(){
    alert("submitted");
  }
}
