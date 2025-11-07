import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  formatter = new Intl.NumberFormat('de-DE');
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(value: number | undefined, ..._args: unknown[]): unknown {
    if (!value) return '';
    return this.formatter.format(value);
  }
}
