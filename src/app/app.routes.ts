import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    { path: "report/:id", component: ReportComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule { }