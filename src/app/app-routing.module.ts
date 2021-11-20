import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
    component: StudentFormComponent
  },
  {
    path:'student/edit/:id',
    component: StudentFormComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
