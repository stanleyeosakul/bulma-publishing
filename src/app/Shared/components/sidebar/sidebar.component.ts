import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent {

  @Input() dashboardLink: boolean;
  @Input() booksLink: boolean;
  @Input() customersLink: boolean;
  @Input() ordersLink: boolean;

  constructor() { }

}
