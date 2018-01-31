import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';

import { CustomersComponent } from './components/customers/customers.component';
import { NewCustomerComponent } from './components/new-customer/new-customer.component';
import { EditCustomerComponent } from './components/edit-customer/edit-customer.component';
import { CustomerService } from './services/customer.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    CustomersComponent,
    NewCustomerComponent,
    EditCustomerComponent
  ],
  providers: [
    CustomerService
  ]
})
export class CustomersModule { }
