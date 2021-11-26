import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ILoginStatus } from '../login-status.interface';
import { IRegistrationStatus } from '../registration-status.interface';
import { IUser } from '../user.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URL:string = environment.apiURL;

  constructor(private readonly httpClient:HttpClient, private readonly router:Router) { }

  login(user: IUser):Observable<ILoginStatus>{
    return this.httpClient.post<ILoginStatus>(`${this.API_URL}/auth/login`, user);
  }

  register(user: IUser):Observable<IRegistrationStatus>{
    return this.httpClient.post<IRegistrationStatus>(`${this.API_URL}/auth/register`, user);
  }

  whoAmI():Observable<IUser>{
    return this.httpClient.get<IUser>(`${this.API_URL}/auth/whoami`);
  }

  isLoggedIn():boolean{
    return !!localStorage.getItem('accessToken');
  }

  logout():void{
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getToken(){
    return localStorage.getItem('accessToken');
  }

}
