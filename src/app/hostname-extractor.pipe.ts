import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hostnameExtractor'
})
export class HostnameExtractorPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const protocol = value.split('//');
      return protocol[0] === 'https:' ? protocol[1].split('/')[0] : protocol[0].split('/')[0];
    }

    return value;
  }

}
