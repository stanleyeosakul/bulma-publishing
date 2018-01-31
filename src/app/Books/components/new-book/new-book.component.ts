import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from '../../models/Book';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styles: []
})
export class NewBookComponent implements OnInit {

  book: Book;
  file: File;

  constructor(private router: Router) { }

  ngOnInit() {
    this.book = {
      _id: 7,
      title: '',
      price: 0,
      imageURL: '',
    };
  }

  onSubmit() {
    console.log(this.book);
    this.router.navigate(['/home/books']);
  }

  fileChange(event) {
    this.file = event.target.files[0];
    this.book.imageURL = '../../assets/images/books/bulma.jpg';  // for development only
  }

}
