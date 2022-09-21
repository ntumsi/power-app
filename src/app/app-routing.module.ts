import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CapacitanceComponent } from './core/capacitance/capacitance.component';
import { CurrentComponent } from './core/current/current.component';
import { InductanceComponent } from './core/inductance/inductance.component';
import { PowerComponent } from './core/power/power.component';
import { ResistanceComponent } from './core/resistance/resistance.component';

const routes: Routes = [
  {path: 'Resistance', component: ResistanceComponent},
  {path: 'Power', component: PowerComponent},
  {path: 'Current' , component: CurrentComponent},
  {path: 'Capacitance', component: CapacitanceComponent},
  {path: 'Inductance', component: InductanceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
