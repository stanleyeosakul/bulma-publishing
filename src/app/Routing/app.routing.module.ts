import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent } from '../Landing/components/landing/landing.component';
import { HomeComponent } from '../Core/components/home/home.component';
import { NotFoundComponent } from '../Core/components/not-found/not-found.component';
import { DashboardComponent } from '../Core/components/dashboard/dashboard.component';
import { BooksComponent } from '../Books/components/books/books.component';
import { NewBookComponent } from '../Books/components/new-book/new-book.component';
import { EditBookComponent } from '../Books/components/edit-book/edit-book.component';
import { CustomersComponent } from '../Customers/components/customers/customers.component';
import { NewCustomerComponent } from '../Customers/components/new-customer/new-customer.component';
import { EditCustomerComponent } from '../Customers/components/edit-customer/edit-customer.component';
import { OrdersComponent } from '../Orders/components/orders/orders.component';
import { OrderDetailsComponent } from '../Orders/components/order-details/order-details.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'books', component: BooksComponent },
        { path: 'books/new-book', component: NewBookComponent },
        { path: 'books/edit-book/:id', component: EditBookComponent },
      { path: 'customers', component: CustomersComponent },
        { path: 'customers/new-customer', component: NewCustomerComponent },
        { path: 'customers/edit-customer/:id', component: EditCustomerComponent },
      { path: 'orders', component: OrdersComponent },
        { path: 'orders/edit-order/:id', component: OrderDetailsComponent },
      ]
  },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
