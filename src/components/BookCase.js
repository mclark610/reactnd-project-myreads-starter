import React from 'react';
import BookShelf from './BookShelf';
import Search from './BookSearch';

import PropTypes from 'prop-types';

/* Bookcase is the wrapper for the bookshelves currently used.
 * it breaks down the books array into the three different shelves.
 */
 /**
 * @description Bookcase is the wrapper for the bookshelves currently used.
 * it breaks down the books array into the three different shelves
 * @constructor none
 * @param {array} books - books array all books on bookshelf
 * @param {func} moveBook - function that moves books when required by book
 */

//class BookCase extends React.Component {
  const BookCase = (props) => {
      const {books,moveBook} = props;
      
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

BookCase.propTypes = {
    books: PropTypes.array.isRequired,
    moveBook: PropTypes.func.isRequired,
}

export default BookCase;
