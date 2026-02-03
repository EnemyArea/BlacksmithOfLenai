import { Component, input } from '@angular/core';

@Component({
  selector: 'app-energy-display',
  imports: [],
  templateUrl: './energy-display.html',
  styleUrl: './energy-display.css',
})
export class EnergyDisplay {
  protected energy = input.required<number>();
}
