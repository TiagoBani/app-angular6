import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: Object, args?: any): any {
    if ( !value || args === '' || args === undefined ) {
      return value;
    }
    if ( args === 'array') {
      return Object.entries(value).map(([type , valor]) => ({type , valor}));
    }
    if ( args === 'key' ) {
      return Object.keys(value);
    }
    return value;
  }

}
