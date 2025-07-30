import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currencySymbol'
})
export class CurrencySymbolPipe implements PipeTransform {

  transform(value: number, currency: string= 'INR'): string {
    return currency === 'INP' ? `₹${value}` : `${value} ${currency}`;;
  }

}
