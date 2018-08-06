import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from '../../../node_modules/rxjs';
import { Movie } from '../models/movie';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<string>, args: string): Array<string> {  // not working yet
    if (array !== undefined) {
        array.sort((a: any, b: any) => {
            if ( a[args] < b[args] ) {
                return -1;
            } else if ( a[args] > b[args] ) {
                return 1;
            } else {
                return 0;
            }
        });
    }
    return array;
  }
}
