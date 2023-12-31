import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReportService } from '../../services/report.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrl: './add-report.component.css',
})
export class AddReportComponent implements OnInit {
  @Output() refresh = new EventEmitter();
  @ViewChild("UploadedPictures") UploadedPictures: ElementRef | null = null;
  reportForm: FormGroup;
  formIsValid = false;
  data: FormData;

  ngOnInit(): void {
    
  }

  constructor(private formBuilder: FormBuilder, private reportService: ReportService, private toastr: ToastrService) {
    this.data = new FormData();
    this.reportForm = this.formBuilder.group({
      Title: ['', [Validators.required,Validators.maxLength(100)]],
      Description: ['',[Validators.required,Validators.minLength(10), Validators.maxLength(1000)]],
      Pictures: [null, [Validators.required]],
    });

    this.reportForm.statusChanges.subscribe(() => {
      this.formIsValid = this.reportForm.valid;
    });
  }


  add() {
    if (this.reportForm.valid) {
      this.data.set('Title', this.reportForm.get('Title')?.value);
      this.data.set('Description', this.reportForm.get('Description')?.value);
      for (var i = 0; i < this.UploadedPictures?.nativeElement.files.length; i++) {
        this.data.append('Pictures', this.UploadedPictures?.nativeElement.files[i]);
      }
      this.reportService.add(this.data)
        .subscribe({
          next: (data) => {
            this.toastr.success("تمت الإضافة")
            this.refresh.emit();
            this.reportForm.reset();
            this.data = new FormData();
          },
          error: (error) => {
            this.toastr.error("حاول مرة أخرى", "فشلت الاضافة");
            console.log(error);
          }
        })
    }
  }
}
