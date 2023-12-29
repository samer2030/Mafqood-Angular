import { Pipe, PipeTransform } from '@angular/core';
import { EyeColor } from '../enums/eye-color.enum';

@Pipe({
  name: 'eye-color'
})
export class EyeColorPipe implements PipeTransform {

  transform(value: EyeColor, language: string | null = null): string | undefined {
    const eyeColorMap = [
      { value: EyeColor.Brown, ar: 'البني', en: 'brown' },
      { value: EyeColor.Blue, ar: 'الأزرق', en: 'blue' },
      { value: EyeColor.Green, ar: 'الأخضر', en: 'green' },
      { value: EyeColor.Gray, ar: 'الرمادي', en: 'gray' },
      { value: EyeColor.Red, ar: 'الأحمر', en: 'red' },
      { value: EyeColor.Violet, ar: 'البنفسجي', en: 'violet' },
      { value: EyeColor.Black, ar: 'الأسود', en: 'black' },
      { value: EyeColor.Multicolored, ar: 'متعدد الألوان', en: 'multicolored' },
      { value: EyeColor.Other, ar: 'آخر', en: 'other' }
    ]
    return language == "en" ? eyeColorMap.find(h => h.value == value)?.en : eyeColorMap.find(h => h.value == value)?.ar;
  }

}
