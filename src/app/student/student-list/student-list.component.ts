import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { IStudent } from '../student.interface';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  studentList:IStudent[] = [];

  constructor(private readonly studentService:StudentService) { }

  ngOnInit(): void {
    this.getStudents();
  }

  getStudents(){
    this.studentService.getStudents().subscribe(
      data => this.studentList = data
    );
  }

  deleteStudent(id: number){
    this.studentService.deleteStudent(id)
    .subscribe(
      res =>{
        this.getStudents();
        console.log(res);
      },
      err => console.log(err)
      
    );

  }


}
