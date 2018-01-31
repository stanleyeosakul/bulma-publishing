import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Customer } from '../../models/Customer';
import { CustomerService } from '../../services/customer.service';
import { SortingService } from '../../../Shared/services/sorting.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styles: [`
    .pointer {
      cursor: pointer;
    }
  `]
})
export class CustomersComponent implements OnInit {

  customers: Customer[];
  pagedItems: any[]
  customer: Customer;
  customerToDelete: Customer;
  deleteSwitch: boolean;

  nameSwitch: string;
  emailSwitch: string;
  countrySwitch: string;
  ordersSwitch: string;

  constructor(
    private customerService: CustomerService,
    private sortingService: SortingService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.customers = this.customerService.getCustomers();
    this.cdRef.detectChanges(); // fix ExpressionChangedAfterItHasBeenCheckedError (occurs on init using pagination)
  }

  showCustomers(e: Customer[]) {
    this.pagedItems = e;
    this.nameSwitch = '';
    this.emailSwitch = '';
    this.countrySwitch = '';
    this.ordersSwitch = '';
  }

  addCustomer(e: Customer[]) {
    this.customers = e;
    this.pagedItems.unshift(this.customers[0]);
  }

  findCustomer(e: Customer[]) {
    this.customers = e;
    this.pagedItems = e;
  }

  sortBy(type: string, name: string, email: string, country: string, orders: string) {
    if (type === 'name') (name === 'asc') ? this.sortingService.sortByWordAscending(this.pagedItems, type) : this.sortingService.sortByWordDescending(this.pagedItems, type);
    if (type === 'email') (email === 'asc') ? this.sortingService.sortByWordAscending(this.pagedItems, type) : this.sortingService.sortByWordDescending(this.pagedItems, type);
    if (type === 'country') (country === 'asc') ? this.sortingService.sortByWordAscending(this.pagedItems, type) : this.sortingService.sortByWordDescending(this.pagedItems, type);
    if (type === 'totalOrders') (orders === 'asc') ? this.sortingService.sortByNumberAscending(this.pagedItems, type) : this.sortingService.sortByNumberDescending(this.pagedItems, type);

    this.nameSwitch = name;
    this.emailSwitch = email;
    this.countrySwitch = country;
    this.ordersSwitch = orders;
  }

  toggleDelete(customer: Customer) {
    this.deleteSwitch = !this.deleteSwitch;
    this.customerToDelete = customer;
  }

  deleteCustomer() {
    for (let i = 0; i < this.customers.length; i++) {
      if (this.customerToDelete === this.customers[i]) this.customers.splice(i, 1);
    }
    this.pagedItems = this.customers;
    this.deleteSwitch = !this.deleteSwitch;
  }

}
