import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.css']
})
export class CurrentComponent implements OnInit {
  

   constructor() { }
  currentForm!:  FormGroup 

  ngOnInit(): void {
    this.currentForm = new FormGroup({
      voltage: new FormControl(200),
      resistance: new FormControl(100)
    })
  }
  submit() {
    let data = this.currentForm.value
    let current = data.voltage / data.resistance
    return current
}
}
