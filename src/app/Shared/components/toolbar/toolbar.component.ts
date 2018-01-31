import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../Books/models/Book';
import { Customer } from '../../../Customers/models/Customer';
import { Order } from '../../../Orders/models/Order';
import { SortingService } from '../../services/sorting.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styles: []
})
export class ToolbarComponent implements OnInit {

  // *********************************************
  // GENERAL INPUTS
  // *********************************************
  @Input() disableNew: boolean;
  @Input() disableOrder: boolean;
  @Input() queryObject: string;

  // *********************************************
  // BOOK VARIABLES
  // *********************************************
  @Input() setBook: boolean;
  @Input() books: Book[];
  @Output() booksOut = new EventEmitter<Book[]>();
  @Output() booksSortOut = new EventEmitter<Book[]>();
  @Output() booksFilterOut = new EventEmitter<Book[]>();

  newBook: Book = {
    title: 'Creating Interfaces with Bulma',
    price: 22.99,
    pageCount: 190,
    isbn: 9781939902498,
    imageURL: '../../assets/images/books/bulma.jpg'
  };
  filteredBooks: any[];
  booksOriginal: Book[];
  mostRecentSelected = true;
  titleSelected = false;
  pageSelected = false;
  isbnSelected = false;

  // *********************************************
  // CUSTOMER VARIABLES
  // *********************************************
  @Input() setCustomer: boolean;
  @Input() customers: Customer[];
  @Output() customersOut = new EventEmitter<Customer[]>();
  @Output() customersFilterOut = new EventEmitter<Customer[]>();

  filteredCustomers: any[];
  customersOriginal: Customer[];

  newCustomer: Customer = {
    name: 'Luke Skywalker',
    email: 'lukeskywalker@tatooine.org',
    address: '1 Moisture Farm Desert',
    address2: 'Hole 15',
    city: 'Outer Mos Eisley',
    zipcode: '10108',
    country: 'Tatooine',
    totalOrders: 0,
    imageURL: '../../assets/images/customers/luke.jpg'
  };

  // *********************************************
  // ORDER VARIABLES
  // *********************************************
  @Input() setOrder: boolean;
  @Input() orders: Order[];
  @Output() ordersOut = new EventEmitter<Order[]>();
  @Output() ordersFilterOut = new EventEmitter<Order[]>();

  filteredOrders: any[];
  ordersOriginal: Order[];

  newOrder: Order = {
    orderNumber: '66',
    orderNum: 66,
    customer: 'Emperor Palpatine',
    date: '2005, May 19 00:00',
    totalBooks: 1,
    books: [
      {
        title: 'The Sith Path',
        price: 66.66,
        imageURL: '../../assets/images/books/sith.jpg'
      }
    ],
    status: 'Successful',
    total: 68.97
  };

  constructor(private sortingService: SortingService) { }

  ngOnInit() {
    if (this.setBook) this.booksOriginal = this.books;
    if (this.setCustomer) this.customersOriginal = this.customers;
    if (this.setOrder) this.ordersOriginal = this.orders;
  }

  quickAdd() {
    // Quick Add Book
    if (this.setBook) {
      this.newBook._id = Math.floor((Math.random() * 1000001) + 10);  // Generate ID - for development only
      this.books.unshift(this.newBook);
      this.booksOut.emit(this.books);
    }

    // Quick Add Customer
    if (this.setCustomer) {
      this.newCustomer._id = Math.floor((Math.random() * 1000001) + 10);  // Generate ID - for development only
      this.customers.unshift(this.newCustomer);
      this.customersOut.emit(this.customers);
    }

    // Quick Add Order
    if (this.setOrder) {
      this.newOrder._id = Math.floor((Math.random() * 1000001) + 10);  // Generate ID - for development only
      this.orders.unshift(this.newOrder);
      this.ordersOut.emit(this.orders);
    }

  }

  filter(query: string) {
    // Book Search Function
    if (this.setBook) {
      this.filteredBooks = this.sortingService.searchQuery(query, this.books, 'title', this.booksOriginal);
      this.booksFilterOut.emit(this.filteredBooks);
    }

    // Customer Search Function
    if (this.setCustomer) {
      this.filteredCustomers = this.sortingService.searchQuery(query, this.customers, 'name', this.customersOriginal);
      this.customersFilterOut.emit(this.filteredCustomers);
    }

    // Order Search Function
    if (this.setOrder) {
      this.filteredOrders = this.sortingService.searchQuery(query, this.orders, 'orderNumber', this.ordersOriginal);
      this.ordersFilterOut.emit(this.filteredOrders);
    }
  }

  // *********************************************
  // BOOK SORT FUNCTIONS
  // *********************************************
  orderByMostRecent() {
    this.books = this.sortingService.sortByNumberDescending(this.books, '_id');
    this.booksSortOut.emit(this.books);
    this.mostRecentSelected = true;
    this.titleSelected = false;
    this.pageSelected = false;
    this.isbnSelected = false;
  }

  orderByTitle() {
    this.books = this.sortingService.sortByWordAscending(this.books, 'title');
    this.booksSortOut.emit(this.books);
    this.mostRecentSelected = false;
    this.titleSelected = true;
    this.pageSelected = false;
    this.isbnSelected = false;
  }

  orderByPages() {
    this.books = this.sortingService.sortByNumberAscending(this.books, 'pageCount');
    this.booksSortOut.emit(this.books);
    this.mostRecentSelected = false;
    this.titleSelected = false;
    this.pageSelected = true;
    this.isbnSelected = false;
  }

  orderByIsbn() {
    this.books = this.sortingService.sortByNumberAscending(this.books, 'isbn');
    this.booksSortOut.emit(this.books);
    this.mostRecentSelected = false;
    this.titleSelected = false;
    this.pageSelected = false;
    this.isbnSelected = true;
  }

}
