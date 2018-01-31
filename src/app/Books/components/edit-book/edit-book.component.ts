import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../models/Book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styles: []
})
export class EditBookComponent implements OnInit {

  books: Book[];
  book: Book;
  file: File;
  id: string;

  constructor(
    private bookService: BookService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.books = this.bookService.getBooks();
    this.book = this.books[this.id];
  }

  onSubmit() {
    this.router.navigate(['/home/books']);
  }

  fileChange(event) {
    this.file = event.target.files[0];
    this.book.imageURL = '../../assets/images/books/bulma.jpg';  // for development only
  }

}
