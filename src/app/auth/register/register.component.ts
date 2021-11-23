import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { IUser } from '../user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:IUser = { username:'', password:'' };

  constructor(
    private readonly authService: AuthService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }

  signUp(){

    this.authService.register(this.user)
      .subscribe(
        res =>{
          console.log(res);
          this.router.navigate(['/login']);
        },
        err => console.log(err)
      );

  }

}
