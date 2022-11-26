import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Author } from 'src/app/model/author';
import { Book } from 'src/app/model/book';

/**
 * This component for displaying further information necessary for a book.
 * (Might become a parent for hosting information)
 */
@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  // @Input()
  // authorList!: Author[];
  bookId: number = 0;
  
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(data => {
      this.bookId = data['bookId']
    });
  }



  // Just a placeholder function
  placeholder(): void {}
}
