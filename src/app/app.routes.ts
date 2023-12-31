import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { NgModule } from '@angular/core';
import { AddReportComponent } from './components/add-report/add-report.component';

export const routes: Routes = [
    { path: "report/:id", component: ReportComponent },
    { path: 'add', component: AddReportComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule { }