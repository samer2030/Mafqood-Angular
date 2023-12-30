import { CarouselModule } from 'ngx-bootstrap/carousel';
import { Component, Input } from '@angular/core';
import { IReport } from '../../models/report';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report',
  standalone:true,
  imports:[CommonModule,CarouselModule],
  templateUrl: './report.component.html',
  styleUrl: './report.component.css'
})
export class ReportComponent {
@Input() Report : IReport | null = null;
constructor(){}

}
