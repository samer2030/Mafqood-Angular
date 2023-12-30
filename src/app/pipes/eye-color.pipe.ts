import { Pipe, PipeTransform } from '@angular/core';
import { EyeColor } from '../enums/eye-color.enum';

@Pipe({
  name: 'eye-color'
})
export class EyeColorPipe implements PipeTransform {

  transform(value: EyeColor, language: string | null = null): string | undefined {
    const eyeColorMap = [
      { value: EyeColor.Brown, ar: 'البني', en: 'brown', hexCode: '#654321' },
      { value: EyeColor.Blue, ar: 'الأزرق', en: 'blue', hexCode: '#0000FF' },
      { value: EyeColor.Green, ar: 'الأخضر', en: 'green', hexCode: '#008000' },
      { value: EyeColor.Gray, ar: 'الرمادي', en: 'gray', hexCode: '#808080' },
      { value: EyeColor.Red, ar: 'الأحمر', en: 'red', hexCode: '#FF0000' },
      { value: EyeColor.Violet, ar: 'البنفسجي', en: 'violet', hexCode: '#8A2BE2' },
      { value: EyeColor.Black, ar: 'الأسود', en: 'black', hexCode: '#000000' },
      { value: EyeColor.Multicolored, ar: 'متعدد الألوان', en: 'multicolored', hexCode: '#FF00FF' },
      { value: EyeColor.Other, ar: 'آخر', en: 'other', hexCode: '#A9A9A9' }
    ]
    return language == "en" ? eyeColorMap.find(h => h.value == value)?.en : eyeColorMap.find(h => h.value == value)?.ar;
  }

}
