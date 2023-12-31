import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { RouterOutlet } from '@angular/router';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { EyeColorPipe } from './pipes/eye-color.pipe';
import { GenderPipe } from './pipes/gender.pipe';
import { HairColorPipe } from './pipes/hair-color.pipe';
import { HairTypePipe } from './pipes/hair-type.pipe';
import { HeightLevelPipe } from './pipes/height-level.pipe';
import { SkinTonePipe } from './pipes/skin-tone.pipe';
import { WeightLevelPipe } from './pipes/weight-level.pipe';
import { ReportComponent } from './components/report/report.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AddReportComponent } from './components/add-report/add-report.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ReportComponent,
    AddReportComponent,
    EyeColorPipe,
    GenderPipe,
    HairColorPipe,
    HairTypePipe,
    HeightLevelPipe,
    SkinTonePipe,
    WeightLevelPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterOutlet,
    LoadingBarHttpClientModule,
    LoadingBarModule,
    LoadingBarRouterModule,
    CarouselModule,
    AppRoutingModule,
    ToastrModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
