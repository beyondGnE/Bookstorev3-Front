import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-book-details-card',
  templateUrl: './book-details-card.component.html',
  styleUrls: ['./book-details-card.component.css']
})
export class BookDetailsCardComponent implements OnInit {
  // @Input()
  // authorList!: Author[];

  @Input()
  book!: Book;

  constructor() {}

  ngOnInit(): void {
    
  }


  // Just a placeholder function
  placeholder(): void {}
}
