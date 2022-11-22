import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-test',
  templateUrl: './book-test.component.html',
  styleUrls: ['./book-test.component.css']
})
export class BookTestComponent implements OnInit {

  constructor(private bookService: BookService) { }

  bookList: Book[] = [];

  ngOnInit(): void {
    this.bookService.getAllBooks()
      .subscribe(data => {
        console.log(data);
        this.bookList = data;
      });
  }

}
