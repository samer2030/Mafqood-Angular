import { Pipe, PipeTransform } from '@angular/core';
import { HairType } from '../enums/hair-type.enum';

@Pipe({
  name: 'hairType',
  standalone: true
})
export class HairTypePipe implements PipeTransform {

  transform(value: HairType, language: string  | null = null): string | null {

    const hairTypeMap = [
      { value: HairType.Straight, ar: 'ناعم', en: 'straight' },
      { value: HairType.Curly, ar: 'مجعد', en: 'curly' },
      { value: HairType.Bald, ar: 'اصلع', en: 'bald' },
    ]

    let hairType = hairTypeMap.find(h => h.value == value);
    if (hairType != null)
      return language == "en" ? hairType.en : hairType.ar;

    return null;

  }

}
