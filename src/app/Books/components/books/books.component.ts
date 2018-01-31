import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';
import { PaginationService } from '../../../Shared/services/pagination.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styles: []
})
export class BooksComponent implements OnInit {

  books: Book[];
  book: Book;
  pagedItems: any[];
  bookToDelete: Book;
  deleteSwitch: boolean;

  constructor(
    private bookService: BookService,
    private paginationService: PaginationService,
    private cdRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.cdRef.detectChanges(); // fix ExpressionChangedAfterItHasBeenCheckedError (occurs on init with pagination)
  }

  showBooks(e: Book[]) {
    this.pagedItems = e;
  }

  updateBook(e: Book[]) {
    this.books = e;
    this.pagedItems = e;
  }

  toggleDelete(book: Book) {
      this.deleteSwitch = !this.deleteSwitch;
      this.bookToDelete = book;
    }

  deleteBook() {
    for (let i = 0; i < this.books.length; i++) {
      if (this.bookToDelete === this.books[i]) this.books.splice(i, 1);
    }
    this.pagedItems = this.books;
    this.deleteSwitch = !this.deleteSwitch;
  }

}
