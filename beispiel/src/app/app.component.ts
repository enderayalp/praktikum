import { Component } from '@angular/core';
import { Book } from './shared/book';
type ViewState= 'list' | 'details';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//   title = 'beispiel';
   book:Book | any;    // Welche ist Richtig ??
// book:any;
  viewState: ViewState='list';

  showList(){
  this.viewState='list';
  }

  showDetails(book:Book){
  this.book= book;
  this.viewState='details';
  }

  }


