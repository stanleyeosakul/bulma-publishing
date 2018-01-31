import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../Shared/shared.module';

import { CommonModule } from '@angular/common';
import { BooksComponent } from './components/books/books.component';
import { NewBookComponent } from './components/new-book/new-book.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';

import { BookService } from './services/book.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
  ],
  declarations: [
    BooksComponent,
    NewBookComponent,
    EditBookComponent
  ],
  providers: [
    BookService
  ]
})
export class BooksModule { }
