import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../models/Customer';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styles: []
})
export class EditCustomerComponent implements OnInit {

  customers: Customer[];
  customer: Customer;
  file: File;
  id: string;
  provinceSelector: boolean;

  states = ['-- State --',
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'NWV', 'WI', 'WY'
  ];

  provinces = ['-- Province --',
    'Alberta', 'British Columbia', 'Manitoba', 'New Brunswick',
    'Newfoundland and Labrador', 'Nova Scotia', 'Northwest Territories',
    'Nunavut', 'Ontario', 'Prince Edward Island', 'Quebec', 'Saskatchewan',
    'Yukon'
  ];

  countries = ['-- Country --',
    'United States', 'Canada', 'United Kingdom',
  ];

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.customers = this.customerService.getCustomers();
    this.customer = this.customers[this.id];
    if (this.customer.country === 'Canada') this.provinceSelector = true;
  }

  onSubmit() {
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
