import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { OrderService } from './../../services/order.service';
import { SortingService } from './../../../Shared/services/sorting.service';
import { Order } from '../../models/Order';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styles: [`
    .pointer {
      cursor: pointer;
    }
  `]
})
export class OrdersComponent implements OnInit {

  orders: Order[];
  pagedItems: any[];

  orderNumSwitch: string;
  customerSwitch: string;
  dateSwitch: string;
  totalBooksSwitch: string;
  statusSwitch: string;
  totalSwitch: string;

  constructor(
    private sortingService: SortingService,
    private orderService: OrderService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.orders = this.orderService.getOrders();
    this.cdRef.detectChanges(); // fix ExpressionChangedAfterItHasBeenCheckedError (occurs on init using pagination)
  }

  showOrders(e: Order[]) {
    this.pagedItems = e;
    this.orderNumSwitch = '';
    this.customerSwitch = '';
    this.dateSwitch = '';
    this.totalBooksSwitch = '';
    this.statusSwitch = '';
    this.totalSwitch = '';
  }

  addOrder(e: Order[]) {
    this.orders = e;
    this.pagedItems.unshift(this.orders[0]);
  }

  findOrder(e: Order[]) {
    this.orders = e;
    this.pagedItems = e;
  }

  sortBy(type: string, orderNum: string, customer: string, date: string, totalBooks: string, status: string, total: string) {
    if (type === 'orderNum') (orderNum === 'asc') ? this.sortingService.sortByNumberAscending(this.pagedItems, type) : this.sortingService.sortByNumberDescending(this.pagedItems, type);
    if (type === 'customer') (customer === 'asc') ? this.sortingService.sortByWordAscending(this.pagedItems, type) : this.sortingService.sortByWordDescending(this.pagedItems, type);
    if (type === 'date') (date === 'asc') ? this.sortingService.sortByDateAscending(this.pagedItems, type) : this.sortingService.sortByDateDescending(this.pagedItems, type);
    if (type === 'totalBooks') (totalBooks === 'asc') ? this.sortingService.sortByNumberAscending(this.pagedItems, type) : this.sortingService.sortByNumberDescending(this.pagedItems, type);
    if (type === 'status') (status === 'asc') ? this.sortingService.sortByWordAscending(this.pagedItems, type) : this.sortingService.sortByWordDescending(this.pagedItems, type);
    if (type === 'total') (total === 'asc') ? this.sortingService.sortByNumberAscending(this.pagedItems, type) : this.sortingService.sortByNumberDescending(this.pagedItems, type);

    this.orderNumSwitch = orderNum;
    this.customerSwitch = customer;
    this.dateSwitch = date;
    this.totalBooksSwitch = totalBooks;
    this.statusSwitch = status;
    this.totalSwitch = total;

  }

}
