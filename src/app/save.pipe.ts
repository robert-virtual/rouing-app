import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'save',
})
export class SavePipe implements PipeTransform {
  transform(value: any, key: string): void {
    localStorage[key] = JSON.stringify(value);
  }
}
