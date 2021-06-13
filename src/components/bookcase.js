import React from 'react';
import BookShelf from './bookshelf';
import Search from './book_search';
import {getAll,get,update} from '../BooksAPI';
import PropTypes from 'prop-types';

class BookCase extends React.Component {
    render() {
        let books = this.props.books;
        let moveBook = this.props.moveBook;
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
                    <BookShelf bookshelfTitle={'Currently Reading'} bookshelfValue={'currentlyReading'}  bookshelfBooks={currentlyReading} moveBook={moveBook}/>
                    <BookShelf bookshelfTitle={'Want to Read'} bookshelfValue={'wantToRead'}  bookshelfBooks={wantToRead} moveBook={moveBook}/>
                    <BookShelf bookshelfTitle={'Read'} bookshelfValue={'read'}  bookshelfBooks={read} moveBook={moveBook}/>
                </div>
              </div>
              <Search />
            </div>
        );
    }
}

BookCase.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default BookCase;
