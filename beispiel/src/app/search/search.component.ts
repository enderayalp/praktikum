import { Subject} from "rxjs";
import { Component, OnInit } from '@angular/core';
import { filter, debounceTime, distinctUntilChanged, tap, switchMap } from 'rxjs/operators';
import { BookStoreService } from "../shared/book-store.service";
import { Book } from '../shared/book'

@Component({
  selector: 'bm-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  keyUp$ = new Subject<string>();
  isLoading = false;
  foundBooks: Book[] = [];

  constructor(private bs: BookStoreService) {
  }


  public ngOnInit(): void {
    // this.keyUp$.subscribe(e =>console.log(e));

    // this.keyUp$.pipe(filter(term => term.length >= 3), debounceTime(500), distinctUntilChanged()).subscribe(e => console.log(e));
    this.keyUp$.pipe(filter(term => term.length >= 3), debounceTime(500), distinctUntilChanged(),
      tap(() => this.isLoading = true),
      switchMap(searchTerm => this.bs.getAllSearch(searchTerm)),
      tap(() => this.isLoading = false)   //Seite 253
    ).subscribe(books => this.foundBooks = books);

  };
}

