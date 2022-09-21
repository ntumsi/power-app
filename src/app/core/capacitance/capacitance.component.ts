import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-capacitance',
  templateUrl: './capacitance.component.html',
  styleUrls: ['./capacitance.component.css']
})
export class CapacitanceComponent implements OnInit {

  constructor() { }
  capactorForm!: FormGroup;

  ngOnInit(): void {
    this.capactorForm=new FormGroup({
      charge: new FormControl(1),
      voltage: new FormControl(1)
    })
  }
  onSubmit(){
    let data = this.capactorForm.value;
    let capacitance = data.charge/data.voltage;
    return capacitance
  }

}
