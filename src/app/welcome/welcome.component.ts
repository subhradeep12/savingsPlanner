import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  constructor(private router: Router){}

  isLogin = false

  onLogin()
  {
    this.isLogin = true
  }
  onSignup()
  {
    this.isLogin = false
  }
  onSubmitSignup(fname: any, lname: any, mail: any, cpass: any, repass: any)
  {
    this.router.navigate(["/comp-int"])
  }
  onSubmitLogin(uname: any, pass: any)
  {
    this.router.navigate(["/comp-int"])
  }
}
