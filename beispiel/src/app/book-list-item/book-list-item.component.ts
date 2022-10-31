import { Component, OnInit, Input } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

// @Input() book:Book;  Welche ist Richtig ??
@Input() book:any;

  constructor() { }

  ngOnInit(): void {
  }

}
