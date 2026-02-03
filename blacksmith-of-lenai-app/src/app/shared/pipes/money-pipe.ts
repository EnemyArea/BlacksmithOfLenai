import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'money',
})
export class MoneyPipe implements PipeTransform {
  private formatter = new Intl.NumberFormat('de-DE');

  public transform(value: number | undefined, ..._args: unknown[]): unknown {
    if (!value) return '';
    return this.formatter.format(value);
  }
}
