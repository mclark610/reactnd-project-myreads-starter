import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';
import { v4 as uuidv4 } from 'uuid';

/**
* @description Displays books on this shelf.
* @constructor none
* @param {string} bookshelfTitle - The title of the bookshelf
* @param {string} bookshelfValue - bookshelf code that can be found in option
* @param {array}  bookshelfBooks - array of books on this shelf.
* @param {function} moveBook     - movebook function used in book
*/
const BookShelf = (props) => {
    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{props.bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
                {
                    props.bookshelfBooks.map((book) => {
                        return(
                            <li key={uuidv4()}>
                                <Book book={book} bookshelfValue={props.bookshelfValue} moveBook={props.moveBook}/>
                            </li>
                        );
                    })
                }
            </ol>
          </div>
        </div>
    )
}


BookShelf.propTypes = {
  bookshelfTitle: PropTypes.string.isRequired,
  bookshelfValue: PropTypes.string.isRequired,
  bookshelfBooks: PropTypes.array,
  moveBook     : PropTypes.func.isRequired,
};


export default BookShelf;
