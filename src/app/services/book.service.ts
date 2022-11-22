import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Book } from '../model/book';
import { environment } from 'src/environments/environment';
import { MessageService } from './message.service';

/**
 * This service interfaces with a bookstore API and performs requests to deal with observables.
 * The primary data this service deals with are books.
 */
@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url:string = '/books'; 
  constructor(private http: HttpClient, private messageService: MessageService) { }

  // NOTE: The service methods are called at the MOMENT an injected component
  // subscribes to those methods!

  /**
   * Gets all books from the API
   * @return a list of books in an observable.
   */
  public getAllBooks() : Observable<Book[]> {
    return this.http.get<Book[]>(environment.apiUrl + this.url)
      .pipe(
        tap(_ => this.log('fetched books')),
          catchError(this.handleError<Book[]>('getAllBooks', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    }
  }

  private log(message: string) {
    this.messageService.add(`BookService: ${message}`);
  }
}
