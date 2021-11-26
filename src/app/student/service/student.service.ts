import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IStudent } from '../student.interface';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  API_URL:string = environment.apiURL;

  constructor(private readonly httpClient: HttpClient) { }

    getStudents():Observable<IStudent[]>{
      return this.httpClient.get<IStudent[]>(`${this.API_URL}/student`)
      //.pipe(map((data: any) => data.students));
    }

    getStudentById(studentId:number):Observable<IStudent>{
      return this.httpClient.get<IStudent>(`${this.API_URL}/student/${studentId}`);
    }

    createStudent(student: IStudent):Observable<IStudent>{
      return this.httpClient.post<IStudent>(`${this.API_URL}/student/create`, student);
    }

    updateStudent(studentId:number, student: IStudent):Observable<IStudent>{
      return this.httpClient.put<IStudent>(`${this.API_URL}/student/update/${studentId}`, student);
    }

    deleteStudent(studentId:number):Observable<IStudent>{
      return this.httpClient.delete<IStudent>(`${this.API_URL}/student/delete?studentId=${studentId}`);
    }

}
