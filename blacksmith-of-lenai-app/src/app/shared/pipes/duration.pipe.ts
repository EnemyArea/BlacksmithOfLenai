import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration',
  standalone: true,
})
export class DurationPipe implements PipeTransform {
  transform(seconds: number, format: 'short' | 'long' = 'short'): string {
    if (isNaN(seconds) || seconds < 0) return '00:00';

    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (format === 'long') {
      if (hrs > 0) {
        return `${hrs} Stunde${hrs !== 1 ? 'n' : ''} ${mins} Minute${mins !== 1 ? 'n' : ''}`;
      }
      if (mins > 0) {
        return `${mins} Minute${mins !== 1 ? 'n' : ''}`;
      }
      return `${secs} Sekunde${secs !== 1 ? 'n' : ''}`;
    }

    // Format: 00:00 oder 00:00:00
    return [
      hrs > 0 ? String(hrs).padStart(2, '0') : '00',
      String(mins).padStart(2, '0'),
      String(secs).padStart(2, '0'),
    ].join(':');
  }
}
