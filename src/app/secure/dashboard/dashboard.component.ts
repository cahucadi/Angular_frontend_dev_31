import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/service/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username:any='';

  constructor(
    private readonly authService: AuthService,
    private readonly router:Router
  ) { }

  ngOnInit(): void {

    this.authService.whoAmI()
    .subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(err)
    );

    this.username = localStorage.getItem('username');

  }

}
