import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis',
  standalone: true,
})
export class EllipsisPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if (typeof value !== 'string') {
      throw new Error('oups');
    }
    let maxLength = 10;
    if (typeof args[0] === 'number') {
      maxLength = args[0];
    }
    if (value.length > maxLength) {
      return value.substring(0, maxLength) + '...';
    }
    return value;
  }
}
