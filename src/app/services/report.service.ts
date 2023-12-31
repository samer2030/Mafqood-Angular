import { Injectable } from '@angular/core';
import { Attachment } from '../models/attachment';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private HttpClient: HttpClient) { }

  getAttachmentPath(attachment: Attachment) {
    return `${environment.server}/report/${attachment.reportId}/${attachment.name}`
  }

  add(report: any) {
    return this.HttpClient.post(`${environment.server}/Report`, report)
  }

}
