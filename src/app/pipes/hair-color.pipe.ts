import { Pipe, PipeTransform } from '@angular/core';
import { HairColor } from '../enums/hair-color.enum';

@Pipe({
  name: 'hairColor',
})
export class HairColorPipe implements PipeTransform {

  transform(value: HairColor, language: string  | null = null): string | undefined {
    const hairColorMap = [
      { value: HairColor.White, ar: 'أبيض', en: 'white' },
      { value: HairColor.Black, ar: 'أسود', en: 'black' },
      { value: HairColor.Brown, ar: 'بني', en: 'brown' },
      { value: HairColor.Yellow, ar: 'أصفر', en: 'yellow' },
      { value: HairColor.Red, ar: 'أحمر', en: 'red' },
      { value: HairColor.Green, ar: 'أخضر', en: 'green' },
      { value: HairColor.Blue, ar: 'أزرق', en: 'blue' },
      { value: HairColor.MultiColored, ar: 'متعدد الألوان', en: 'multi-colored' },
      { value: HairColor.Other, ar: 'أخرى', en: 'other' }
    ];
    
    if (language == "en")
      return hairColorMap.find(h => h.value == value)?.en;

    return hairColorMap.find(h => h.value == value)?.ar;
  }

}
