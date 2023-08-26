import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StudentComponent } from './components/student/student.component';

const routes: Routes = [
  {
    path: 'dashboard',
    children: [
      { path: '', component: DashboardComponent },
      { path: 'students', component: StudentComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
