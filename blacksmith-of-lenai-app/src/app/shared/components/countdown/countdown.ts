import {
  Component,
  Input,
  signal,
  OnInit,
  OnDestroy,
  input,
  Signal,
} from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown implements OnInit, OnDestroy {
  private interval = 0;
  private _timePassed = signal(0);
  private _completed = signal(false);
  completed: Signal<boolean> = this._completed.asReadonly();

  @Input()
  set initialTime(value: number) {
    this._timePassed.set(value);
  }

  completedLabel = input('Fertig');
  seconds = signal(0);
  minutes = signal(0);
  hours = signal(0);

  ngOnInit() {
    this.updateTimeSignals();
    this.interval = window.setInterval(() => {
      this._timePassed.set(this._timePassed() - 1);
      this.updateTimeSignals();

      if (this._timePassed() <= 0) {
        this._completed.set(true);
        window.clearInterval(this.interval);
      }
    }, 1000);
  }

  private updateTimeSignals() {
    this.seconds.set(this._timePassed() % 60);
    this.minutes.set(Math.floor((this._timePassed() % 3600) / 60));
    this.hours.set(Math.floor(this._timePassed() / 3600));
  }

  ngOnDestroy() {
    window.clearInterval(this.interval);
  }
}
