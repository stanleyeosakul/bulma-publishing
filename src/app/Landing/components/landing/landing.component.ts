import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styles: []
})
export class LandingComponent implements OnInit {

  user: User;
  errSwitch = false;
  errMsg: string;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.user = this.loginService.getUser();
  }

  onSubmit() {

    // Validate Email
    if (!this.loginService.validateEmail(this.user.email)) {
      this.errSwitch = true;
      this.errMsg = 'Please use a valid email address';
      return false;
    }

    // Validate Password
    if (!this.loginService.validatePassword(this.user.password)) {
      this.errSwitch = true;
      this.errMsg = 'Please enter a password between 6-20 characters which contains at least one numeric digit, one uppercase, and one lowercase letter';
      return false;
    }

    // Remember user, if box checked
    (this.user.rememberMe) ? this.loginService.saveUser(this.user) : this.loginService.deleteUser();

    // ********************************
    // Insert authentication code here
    // ********************************
    // console.log(this.user.email)
    // console.log(this.user.password)
    this.router.navigate(['/home']); // Navigate to Dashboard if login successful
  }

  hideError() {
    this.errSwitch = false;
  }

}
