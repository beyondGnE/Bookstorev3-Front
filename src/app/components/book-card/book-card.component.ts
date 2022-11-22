import { Component, OnInit, Input } from '@angular/core';
import { Book } from 'src/app/model/book';

/**
 * A component that focuses on displaying the thumbnail of a single book.
 */
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent implements OnInit{

  @Input()
  aBook!: Book;

  ngOnInit(): void {
    
  }

  constructor() {}

  toBookDetails(book: Book) {
    
  }
}
