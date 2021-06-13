import React from 'react';
import BookShelf from './bookshelf';
import Search from './book_search';
import {getAll,get,update} from '../BooksAPI';

class BookCase extends React.Component {
    constructor() {
        super();
        this.state = {
            books: [],
        }
    }
    async componentDidMount() {
        try {
            await getAll().then((books) => {
                this.setState({books});
            })
        }
        catch(err) {
            console.log("oops! error handling search data: " + err.message);
        }
    }

    moveBook = (book,newLocation) => {
        const idx = this.state.books.findIndex(b => b.id === book.id);
        console.log("movebooks idx is " + idx);
        let books = [...this.state.books];
        books[idx].shelf=newLocation;
        this.setState({books});
        console.log("book is now " + JSON.stringify(books[idx]));
        try {
            update(book,newLocation).then( res => {
                console.log("res: " + JSON.stringify(res));
            });
        }
        catch(err) {
            console.log("could not update " + book.title + " because of err: " + err.message);
        }
    }

    render() {
        let books = this.state.books;

        const currentlyReading = books.filter( (book) =>  book.shelf === "currentlyReading" );
        const wantToRead = books.filter( (book) =>  book.shelf === "wantToRead" );
        const read = books.filter( (book) =>  book.shelf === "read" );

        return(
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                    <BookShelf bookshelfTitle={'Currently Reading'} bookshelfValue={'currentlyReading'}  bookshelfBooks={currentlyReading} moveBook={this.moveBook}/>
                    <BookShelf bookshelfTitle={'Want to Read'} bookshelfValue={'wantToRead'}  bookshelfBooks={wantToRead} moveBook={this.moveBook}/>
                    <BookShelf bookshelfTitle={'Read'} bookshelfValue={'read'}  bookshelfBooks={read} moveBook={this.moveBook}/>
                </div>
              </div>
              <Search />
            </div>
        );
    }
}

export default BookCase;
