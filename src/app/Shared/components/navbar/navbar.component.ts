import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [`
    .has-dropdown:hover {
      cursor: default;
      }
  `]
})

export class NavbarComponent implements OnInit {

  user: any = {};
  dropdownSwitch: boolean;
  burgerSwitch: boolean;
  profileSwitch: boolean;
  bugSwitch: boolean;
  bugSuccessSwitch: boolean;
  disableBugSubmit: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.user = {
      name: 'Alex Johnson',
      email: 'alexjohnson@gmail.com'
    };
  }

  toggleDropdown() {
    this.dropdownSwitch = !this.dropdownSwitch;
  }

  toggleBurger() {
    this.burgerSwitch = !this.burgerSwitch;
  }

  toggleProfile() {
    this.profileSwitch = !this.profileSwitch;
  }

  toggleReportBug() {
    this.bugSwitch = !this.bugSwitch;
    this.bugSuccessSwitch = false;
    this.disableBugSubmit = false;
  }

  showBugNotification() {
    this.bugSuccessSwitch = true;
    this.disableBugSubmit = true;
    this.autoClose();
  }

  autoClose() {
    setTimeout(() => {
      this.profileSwitch = false;
      this.bugSwitch = false;
    }, 2000);
  }

  logout() {
    this.router.navigate(['/']);
  }
}
