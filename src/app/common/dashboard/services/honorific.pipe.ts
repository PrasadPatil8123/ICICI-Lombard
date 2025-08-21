import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'honorific'
})
export class HonorificPipe implements PipeTransform {

  transform(name: string, gender: string): string {
  const normalized = gender?.toLowerCase();
  const prefix = normalized === 'male' ? 'Mr.' : normalized === 'female' ? 'Ms.' : '';
  return `${prefix} ${name}`;
}

}
