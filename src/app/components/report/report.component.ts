import { Component, Input } from '@angular/core';
import { IReport } from '../../models/report';
import { ReportService } from '../../services/report.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
  @Input() report: IReport | null = null;
  constructor(public _reportService: ReportService) {
    this.report = {
      "id": "d8ba5fbc-df67-4167-9f04-534d87fff9e8",
      "name": "Noah Bogisich",
      "gender": 1,
      "skinTone": 1,
      "hairType": 1,
      "facialHair": false,
      "hairColor": 1,
      "eyeColor": 1,
      "heightLevel": 1,
      "weightLevel": 1,
      "minAge": 10,
      "maxAge": 20,
      "street": "Leuschke Park",
      "district": "microchip",
      "dateTime": "2023-12-05T21:22:32.937",
      "contactNumber": "357-777-7399",
      "additionalInfo": "No additional Information",
      "valid": false,
      "missing": true,
      "attachments": [
        {
          "id": "235fd702-211f-4c99-912f-0e6fc5704b93",
          "reportId": "d8ba5fbc-df67-4167-9f04-534d87fff9e8",
          "name": "638374374121524421.png"
        },
        {
          "id": "60bc86a6-1091-4c4c-9531-371f65aa56d0",
          "reportId": "d8ba5fbc-df67-4167-9f04-534d87fff9e8",
          "name": "638374374121548251.webp"
        },
        {
          "id": "d4da41e8-fd04-4fa0-a038-52433508a7bc",
          "reportId": "d8ba5fbc-df67-4167-9f04-534d87fff9e8",
          "name": "638374374121460899.png"
        }
      ],
      "city": {
        "id": 328,
        "nameAr": "نويبع",
        "nameEn": "Nuweiba",
        "governorate": {
          "id": 21,
          "nameAr": "جنوب سيناء",
          "nameEn": "South Sinai"
        }
      }
    }
  }

}
