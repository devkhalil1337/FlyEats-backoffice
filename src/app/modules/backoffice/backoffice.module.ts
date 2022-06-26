import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
	path: "**",
	redirectTo: "dashboard",
	pathMatch: "full"
}, {
	path: 'dashboard',
	component: DashboardComponent
}];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
  ],
  exports:[RouterModule]
})
export class BackofficeModule { }