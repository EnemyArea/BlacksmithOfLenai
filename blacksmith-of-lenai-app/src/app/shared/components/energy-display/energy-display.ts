import { Component, input } from '@angular/core';

@Component({
  selector: 'app-energy-display',
  imports: [],
  templateUrl: './energy-display.html',
})
export class EnergyDisplay {
  public readonly energy = input.required<number>();
}
