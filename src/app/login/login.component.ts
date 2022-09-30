import { Component, Input, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  @Input() password;
  @Input() email;
  constructor(private api:ApiService, private router: Router) { }

  ngOnInit() {
  }
  signin():void{
    const user={
      "email":this.email,
      "password":this.password
    }
    this.api.signIn(user).subscribe( {
      next: data => {
        console.log( data.user + "reclamation ajouté")
        localStorage.setItem('token',data.token)
        localStorage.setItem('role',data.user)
        this.router.navigate(['/reclamation'])
      }, 
      error: error=>{
        console.log(error)
      }
    }
    )
  }
}
