import { Injectable } from '@angular/core';
import { Attachment } from '../models/attachment';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor() { }
  getAttachmentPath(attachment: Attachment) {
    return `${environment.server}/report/${attachment.reportId}/${attachment.name}`
  }
}
