import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inductance',
  templateUrl: './inductance.component.html',
  styleUrls: ['./inductance.component.css']
})
export class InductanceComponent implements OnInit {

  constructor() { }
  inductanceForm! : FormGroup;

  ngOnInit(): void {
    this.inductanceForm = new FormGroup({
        voltage: new FormControl(1),
        currentChange: new FormControl(0.5),
        timeChange: new FormControl(.1)


      })
  }
  onSubmit(){
    let data = this.inductanceForm.value;
    console.log(data)
  // To DO (Inductance calculations need to be done here)
  }

}
