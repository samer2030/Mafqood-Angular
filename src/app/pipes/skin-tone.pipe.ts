import { Pipe, PipeTransform } from '@angular/core';
import { SkinTone } from '../enums/skin-tone.enum';

@Pipe({
  name: 'skin-tone'
})
export class SkinTonePipe implements PipeTransform {

  transform(value: SkinTone, language: string  | null = null): string | undefined {
    const skinToneMap = [
      { value: SkinTone.White, ar: 'أبيض', en: 'white', hexCode: '#FFFAF0' },
      { value: SkinTone.Brown, ar: 'قمحي', en: 'brown', hexCode: '#D2B48C' },
      { value: SkinTone.Black, ar: 'أسود', en: 'black', hexCode: '#655C56' }
    ]
    return language == "en" ? skinToneMap.find(h => h.value == value)?.en : skinToneMap.find(h => h.value == value)?.ar;
  }

}
