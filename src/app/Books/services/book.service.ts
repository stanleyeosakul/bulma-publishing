import { Injectable } from '@angular/core';
import { Book } from '../models/Book';

@Injectable()
export class BookService {

  library: Book[] = [
    {
      _id: 6,
      title: 'TensorFlow for Machine Intelligence',
      price: 22.99,
      pageCount: 270,
      isbn: 9781939902351,
      imageURL: '../../assets/images/books/tensorflow.jpg'
    },
    {
      _id: 5,
      title: 'Developing a Gulp.js Edge',
      price: 22.99,
      pageCount: 134,
      isbn: 9781939902146,
      imageURL: '../../assets/images/books/gulp.jpg'
    },
    {
      _id: 4,
      title: 'Docker in Production',
      price: 22.99,
      pageCount: 156,
      isbn: 9781939902184,
      imageURL: '../../assets/images/books/docker.jpg'
    },
    {
      _id: 3,
      title: 'Deconstructing Google Cardboard Apps',
      price: 22.99,
      pageCount: 178,
      isbn: 9781939902245,
      imageURL: '../../assets/images/books/google-cardboard.jpg'
    },
    {
      _id: 2,
      title: 'Choosing a javascript framework',
      price: 19.99,
      pageCount: 96,
      isbn: 9781939902092,
      imageURL: '../../assets/images/books/js-framework.jpg'
    },
    {
      _id: 1,
      title: 'Learning Swift',
      price: 22.99,
      pageCount: 342,
      isbn: 9781939902115,
      imageURL: '../../assets/images/books/swift.jpg'
    },
  ];

  constructor() { }

  getBooks(): Book[] {
    return this.library;
  }

}
