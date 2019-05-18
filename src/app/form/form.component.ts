import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  wait:boolean=false;
  constructor() { }

  submit()
  {
    this.wait=true;
    setTimeout(()=>
    {
     this.wait=false;
    },2000)
  }
  ngOnInit() {
  }

}
