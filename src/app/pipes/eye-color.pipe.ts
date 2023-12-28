import { Pipe, PipeTransform } from '@angular/core';
import { EyeColor } from '../enums/eye-color.enum';

@Pipe({
  name: 'eye-color'
})
export class EyeColorPipe implements PipeTransform {

  transform(value: EyeColor, language: string | null = null): string | undefined {
    const eyeColorMap = [
      { value: EyeColor.Brown, ar: 'البني', en: 'Brown' },
      { value: EyeColor.Blue, ar: 'الأزرق', en: 'Blue' },
      { value: EyeColor.Green, ar: 'الأخضر', en: 'Green' },
      { value: EyeColor.Gray, ar: 'الرمادي', en: 'Gray' },
      { value: EyeColor.Red, ar: 'الأحمر', en: 'Red' },
      { value: EyeColor.Violet, ar: 'البنفسجي', en: 'Violet' },
      { value: EyeColor.Black, ar: 'الأسود', en: 'Black' },
      { value: EyeColor.Multicolored, ar: 'متعدد الألوان', en: 'Multicolored' },
      { value: EyeColor.Other, ar: 'آخر', en: 'Other' }
    ]
    return language == "en" ? eyeColorMap.find(h => h.value == value)?.en : eyeColorMap.find(h => h.value == value)?.ar;
  }

}
