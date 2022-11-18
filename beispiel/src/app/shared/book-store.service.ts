import { Injectable } from '@angular/core';
import { retry, map, catchError } from 'rxjs/operators';
import { Book } from './book';
import { HttpClient, HttpErrorResponse} from "@angular/common/http";
import { throwError, Observable} from "rxjs";
import { BookRaw} from "./book-raw";
import { BookFactory} from "./book-factory";

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  private api = 'https://api4.angular-buch.com/secure';

books: Book[];

private errorHandler(error: HttpErrorResponse): Observable<any>{
  console.error('Fehler aufgetreten!');
  return throwError(error);                     //Seite 245
}

  constructor(private http: HttpClient) {
   this.books=[{
   isbn:'9783864907791',
   title: 'Angular',
   authors: ['Ferdinand Malcher', 'Johannes Hoppe', 'Danny Koppenhagen'],
   published: new Date(2020, 8, 1),
   subtitle: 'Grundlagen, fortgeschrittene Themen und Best Practices',
   rating: 5,
   thumbnails: [{
   url: 'https://ng-buch.de/angular-cover.jpg',
   title: 'Buchcover'
   }],
   description:' Lernen Sie Angular mit diesem Praxisbuch!'}
   ];

}

  getSingle(isbn: string ): Observable<Book> {
    return this.http.get<BookRaw>(`${this.api}/books/${isbn}`).pipe(retry(3), map(b=>BookFactory.fromRaw(b)), catchError(this.errorHandler));
  }

  getAllSearch(searchTerm:string): Observable<Book[]>{
  return this.http.get<BookRaw[]>(`${this.api}/books/search/${searchTerm}`).pipe(retry(3), map(booksRaw => booksRaw.map(b => BookFactory.fromRaw(b)),),
    catchError(this.errorHandler));
  }

  getAll(): Observable<Book[]>{
    return this.http.get<BookRaw[]>(`${this.api}/books`).pipe(map(booksRaw=>booksRaw.map(b=>BookFactory.fromRaw(b)),));
  }

  remove(isbn: string): Observable<any> {
    return this.http.delete(`${this.api}/book${isbn}`, {responseType:'text'});

  }
}



