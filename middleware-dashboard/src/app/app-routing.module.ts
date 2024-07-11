import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { InstanceManagementComponent } from './components/instance-management/instance-management.component';
import { PatchManagementComponent } from './components/patch-management/patch-management.component';
import { ReportsComponent } from './components/reports/reports.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'instance-management', component: InstanceManagementComponent },
  { path: 'patch-management', component: PatchManagementComponent },
  { path: 'reports', component: ReportsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
