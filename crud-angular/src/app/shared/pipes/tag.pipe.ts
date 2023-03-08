import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: string): string {
    switch (value){
      case 'tag 1': return 'code';
      case 'tag 2': return 'computer';
    }
    return 'code';
  }

}
