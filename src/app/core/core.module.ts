import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PowerComponent } from './power/power.component';
import { ResistanceComponent } from './resistance/resistance.component';
import { CurrentComponent } from './current/current.component';
import { CapacitanceComponent } from './capacitance/capacitance.component';
import { InductanceComponent } from './inductance/inductance.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    PowerComponent,
    ResistanceComponent,
    CurrentComponent,
    CapacitanceComponent,
    InductanceComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    PowerComponent,
    ResistanceComponent,
    CurrentComponent,
    CapacitanceComponent,
    InductanceComponent,
    RouterModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    ReactiveFormsModule

  ]
})
export class CoreModule { }
