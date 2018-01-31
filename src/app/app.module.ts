import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './Shared/shared.module';
import { AppRoutingModule } from './Routing/app.routing.module';
import { LandingModule } from './Landing/landing.module';
import { CoreModule } from './Core/core.module';
import { BooksModule } from './Books/books.module';
import { CustomersModule } from './Customers/customers.module';
import { OrdersModule } from './Orders/orders.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    LandingModule,
    CoreModule,
    BooksModule,
    CustomersModule,
    OrdersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
