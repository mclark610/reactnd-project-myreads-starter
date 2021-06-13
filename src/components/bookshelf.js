import React from 'react';
import PropTypes from 'prop-types';
import Book from './book';
/* TODO: replace idx with uuid4 */
class BookShelf extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bookshelfTitle: this.props.bookshelfTitle,
            bookshelfValue: this.props.bookshelfValue,
        };
    }

    render() {
        return(
            <div className="bookshelf">
              <h2 className="bookshelf-title">{this.props.bookshelfTitle}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        this.props.bookshelfBooks.map((book,idx) => {
                            return(
                                <li key={idx}>
                                    <Book book={book} bookId={book.id} bookAuthors={book.authors} bookTitle={book.title} bookCoverURL={book.imageLinks.thumbnail} bookshelfValue={this.props.bookshelfValue} moveBook={this.props.moveBook}/>
                                </li>
                            );
                        })
                    }
                </ol>
              </div>
            </div>
        )
    }
}


BookShelf.propTypes = {
  bookshelfTitle: PropTypes.string.isRequired,
  bookshelfValue: PropTypes.string.isRequired,
  bookshelfBooks: PropTypes.array,
  moveBook     : PropTypes.func.isRequired,
};


export default BookShelf;
