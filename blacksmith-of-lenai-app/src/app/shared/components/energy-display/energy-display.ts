import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-energy-display',
  imports: [],
  templateUrl: './energy-display.html',
  styleUrl: './energy-display.css',
})
export class EnergyDisplay {
  @Input() energy = 0;
}
