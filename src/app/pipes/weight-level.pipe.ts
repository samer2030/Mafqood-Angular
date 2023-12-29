import { Pipe, PipeTransform } from '@angular/core';
import { WeightLevel } from '../enums/weight-level.enum';

@Pipe({
  name: 'weight-level'
})
export class WeightLevelPipe implements PipeTransform {

  transform(value: WeightLevel, language: string | null = null): string | undefined {
    const weightLevelMap = [
      { value: WeightLevel.Below, ar: 'أقل وزنًا', en: 'below' },
      { value: WeightLevel.Regular, ar: 'وزن عادي', en: 'regular' },
      { value: WeightLevel.Over, ar: 'أكثر وزنًا', en: 'over' }
    ]
    return language == "en" ? weightLevelMap.find(h => h.value == value)?.en : weightLevelMap.find(h => h.value == value)?.ar;
  }

}
