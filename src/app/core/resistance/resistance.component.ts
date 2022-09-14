import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-resistance',
  templateUrl: './resistance.component.html',
  styleUrls: ['./resistance.component.css']
})
export class ResistanceComponent implements OnInit {
 
  
  // constructor() { }
  resistanceForm!: FormGroup
  ngOnInit(): void {
    this.resistanceForm = new FormGroup({
      voltage: new FormControl(200),
      current: new FormControl(1)
    })
  }
  submit() {
    let data = this.resistanceForm.value
  
    let resistance = Math.round((data.voltage / data.current))
   
    return resistance
  }
 
}

