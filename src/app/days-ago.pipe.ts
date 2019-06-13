import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      const interval = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let counter;

      if (seconds < 29) {// less than 30 seconds ago will show as 'Just now'
        return 'Just now';
      }
      for (const i in interval) {
        counter = Math.floor(seconds / interval[i]);
        if (counter > 0) {
          return counter === 1 ? `${counter} ${i} ago` : `${counter} ${i}s ago`;
        }
      }
    }
    return value;
  }
}
