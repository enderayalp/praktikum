import { Book} from "./book";
import { BookRaw} from "./book-raw";

export class BookFactory {
// static fromRaw(b:BookRaw):Book {
  static empty (): Book{
  return{
    ...b,
    isbn: '',
    title: '',
    authors: [''],
    published: new Date(),
    subtitle: '',
    rating: 0,
    thumbnails:[
      { url: '', title: ''}
    ],
    description: ''};
     published: new Date(b.published)
  };
}
