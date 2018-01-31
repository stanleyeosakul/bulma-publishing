import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-new-customer',
  templateUrl: './new-customer.component.html',
  styles: []
})
export class NewCustomerComponent implements OnInit {

  customer: Customer;
  file: File;
  provinceSelector: boolean;

  states = ['-- State --',
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'NWV', 'WI', 'WY'
  ];

  provinces = [ '-- Province --',
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Northwest Territories',
    'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
    'Yukon'
  ];

  countries = [ '-- Country --',
    'United States', 'Canada', 'United Kingdom',
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    this.customer = {
      _id: 4,
      name: '',
      email: '',
      address: '',
      address2: '',
      city: '',
      state: this.states[0],
      province: this.provinces[0],
      zipcode: '00000',
      country: this.countries[0],
      totalOrders: 0,
      imageURL: ''
    };
  }

  onSubmit() {
    console.log(this.customer);
    this.router.navigate(['/home/customers']);
  }

  showProvinces() {
    (this.customer.country === 'Canada') ? this.provinceSelector = true : this.provinceSelector = false;
  }

  fileChange(event) {
    this.file = event.target.files[0];
    this.customer.imageURL = '../../assets/images/customers/avatar.jpg';  // for development only
  }

}
