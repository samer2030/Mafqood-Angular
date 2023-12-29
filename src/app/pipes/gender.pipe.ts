import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../enums/gender.enum';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: Gender, language: string  | null = null): string | undefined {
    const genderMap = [
      { value: Gender.Male, ar: 'ذكر', en: 'male' },
      { value: Gender.Female, ar: 'أنثى', en: 'female' },
    ]
    return language == "en" ? genderMap.find(h => h.value == value)?.en : genderMap.find(h => h.value == value)?.ar;
  }

}
