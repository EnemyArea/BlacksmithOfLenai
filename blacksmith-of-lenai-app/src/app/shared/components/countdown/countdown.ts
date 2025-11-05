import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-countdown',
  imports: [],
  templateUrl: './countdown.html',
  styleUrl: './countdown.css',
})
export class Countdown implements OnInit {
  private interval = 0;
  protected timePassedInternal = 0;
  protected seconds = 0;
  protected minutes = 0;
  protected hours = 0;

  @Input() completedLabel = 'Bereit';

  @Input()
  set timePassed(timePassed: number) {
    this.timePassedInternal = timePassed;

    this.seconds = this.toSeconds();
    this.minutes = this.toMinutes();
    this.hours = this.toHours();
  }

  @Output() countdownCompleted = new EventEmitter<void>();

  ngOnInit() {
    this.interval = window.setInterval(() => {
      this.timePassedInternal = this.timePassedInternal - 1;
      this.seconds = this.toSeconds();
      this.minutes = this.toMinutes();
      this.hours = this.toHours();

      if (this.timePassedInternal <= 0) {
        this.countdownCompleted?.emit();
        window.clearInterval(this.interval);
      }
    }, 1000);
  }

  private toSeconds(): number {
    return Math.floor(this.timePassedInternal % 60);
  }

  private toMinutes(): number {
    return Math.floor((this.timePassedInternal % 3600) / 60);
  }

  private toHours(): number {
    return Math.floor(this.timePassedInternal / 3600);
  }
}
