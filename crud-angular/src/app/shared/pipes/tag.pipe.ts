import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: string): string {
    switch (value){
      case 'Tag 1': return 'code';
      case 'Tag 2': return 'computer';
    }
    return 'code';
  }

}
