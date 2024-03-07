import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'stars',
})
export class StarsPipe implements PipeTransform {
  transform(rating: string): string {
    if (!rating) return '';
    const numStars = Math.round(parseFloat(rating) / 2);
    return Array(numStars).fill('⭐️').join('');
  }
}
