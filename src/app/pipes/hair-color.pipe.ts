import { Pipe, PipeTransform } from '@angular/core';
import { HairColor } from '../enums/hair-color.enum';

@Pipe({
  name: 'hairColor',
})
export class HairColorPipe implements PipeTransform {

  transform(value: HairColor, language: string  | null = null): string | undefined {
    const hairColorMap = [
      { value: HairColor.White, ar: 'أبيض', en: 'white', hexCode: '#FFFFFF' },
      { value: HairColor.Black, ar: 'أسود', en: 'black', hexCode: '#000000' },
      { value: HairColor.Brown, ar: 'بني', en: 'brown', hexCode: '#654321' },
      { value: HairColor.Yellow, ar: 'أصفر', en: 'yellow', hexCode: '#FFFF00' },
      { value: HairColor.Red, ar: 'أحمر', en: 'red', hexCode: '#FF0000' },
      { value: HairColor.Green, ar: 'أخضر', en: 'green', hexCode: '#008000' },
      { value: HairColor.Blue, ar: 'أزرق', en: 'blue', hexCode: '#0000FF' },
      { value: HairColor.MultiColored, ar: 'متعدد الألوان', en: 'multi-colored', hexCode: '#FF00FF' },
      { value: HairColor.Other, ar: 'أخرى', en: 'other', hexCode: '#A9A9A9' }
    ];
    
    if (language == "en")
      return hairColorMap.find(h => h.value == value)?.en;

    return hairColorMap.find(h => h.value == value)?.ar;
  }

}
