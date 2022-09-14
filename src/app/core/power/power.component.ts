import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
  
 
export class PowerComponent implements OnInit {
  
  // constructor(){}
  powerForm!: FormGroup 
  ngOnInit(): void {
    this.powerForm = new FormGroup({
      voltage: new FormControl(20),
      current: new FormControl(10)
    });
  }
  submit() {
    let data = this.powerForm.value
    let power = data.voltage * data.current
    return power
 }
}


