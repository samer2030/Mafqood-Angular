import { Pipe, PipeTransform } from '@angular/core';
import { HeightLevel } from '../enums/height-level.enum';

@Pipe({
  name: 'height-level'
})
export class HeightLevelPipe implements PipeTransform {

  transform(value: HeightLevel, language: string  | null = null): string | undefined {
    const heightLevelMap = [
      { value: HeightLevel.Short, ar: 'قصير', en: 'Short' },
      { value: HeightLevel.Regular, ar: 'معتدل', en: 'Regular' },
      { value: HeightLevel.Tall, ar: 'طويل', en: 'Tall' }
    ]
    return language == "en" ? heightLevelMap.find(h => h.value == value)?.en : heightLevelMap.find(h => h.value == value)?.ar;
  }

}
