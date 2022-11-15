import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { BookStoreService} from "../shared/book-store.service";
import { Book } from '../shared/book';

@Component({
  selector: 'bm-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  // book: Book | undefined;
@Input() book:Book | any;
@Output() showListEvent = new EventEmitter<any>();




  // constructor( private bs: BookStoreService, private route: ActivatedRoute) {
  //   this.book={authors: [], isbn: "", published: new Date(), title: "", rating: 5 };
  // }

  constructor(
    private bs: BookStoreService,
    private router: Router,
    private route: ActivatedRoute
  ) {  }

  removeBook() {
    if (confirm('Buch wirklich löschen?')) {
      this.bs.remove(this.book.isbn).subscribe( res => this.router.navigate(['../'], { relativeTo: this.route}));
    }
  }

  // ngOnInit(): void {
  //   const params = this.route.snapshot.paramMap;
  //   this.book = this.bs.getSingle(params.get('isbn'));
  // }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.bs.getSingle(params.get('isbn')).subscribe(b=>this.book = b) ;
  }

  getRating(num:number | undefined){
  return new Array(num);
  }

  showBookList(){
  this.showListEvent.emit();
  }

}


//   const rating : number = this.book!.rating!;
