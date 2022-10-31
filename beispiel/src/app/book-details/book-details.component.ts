import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
@Input() book:Book;
@Output() showListEvent = new EventEmitter<any>();

  constructor() {
    this.book={authors: [], isbn: "", published: new Date(), title: "", rating: 5 };

  }

  ngOnInit(): void {
  }



  getRating(num:number){
  return new Array(num);
  }

  showBookList(){
  this.showListEvent.emit();
  }

}


//   const rating : number = this.book!.rating!;
