import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'status',
  standalone: false
})
export class StatusPipe implements PipeTransform {

  transform(status: boolean | undefined): string {
    if(status) {
      return 'Online';
    }

    return 'Offline';
  }

}
