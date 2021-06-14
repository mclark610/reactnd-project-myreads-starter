import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';
import { v4 as uuidv4 } from 'uuid';

/* BookShelf
 * Displays books on this shelf.
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
