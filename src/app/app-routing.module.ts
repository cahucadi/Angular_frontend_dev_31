import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './secure/dashboard/dashboard.component';
import { HomeComponent } from './shared/home/home.component';
import { StudentFormComponent } from './student/student-form/student-form.component';
import { StudentListComponent } from './student/student-list/student-list.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'student/list',
    component: StudentListComponent
  },
  {
    path:'student/create',
    component: StudentFormComponent,
    canActivate: [AuthGuard]

  },
  {
    path:'student/edit/:id',
    component: StudentFormComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
