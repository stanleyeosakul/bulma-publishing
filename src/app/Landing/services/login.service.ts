import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable()
export class LoginService {

  LOCALSTORAGE_ID = 'userInfo978245635';

  user: User = {
    email: '',
    password: '',
    rememberMe: false
  };

  constructor() { }

  // Validate Email
  validateEmail(email): boolean {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email.toLowerCase());
  }

  // Validate Password
  validatePassword(password): boolean {
    const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    return re.test(password);
  }

  // Get User from localStorage
  getUser() {
    if (!(localStorage.getItem(this.LOCALSTORAGE_ID) === null)) this.user = JSON.parse(localStorage.getItem(this.LOCALSTORAGE_ID));
    return this.user;
  }

  // Save User to localStorage
  saveUser(user) {
    localStorage.setItem(this.LOCALSTORAGE_ID, JSON.stringify(user));
  }

  // Delete User from localStorage
  deleteUser() {
    localStorage.removeItem(this.LOCALSTORAGE_ID);
  }

}
