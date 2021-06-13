import React from 'react';
import PropTypes from 'prop-types';
import MoveBook from './move_book';

class Book extends React.Component {
    constructor(props) {
        super(props);
    }
    changeLocation = (newLocation) => {
        this.props.moveBook(this.props.book,newLocation);
    }

    render() {
        return(
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${this.props.bookCoverURL})`
                }}></div>
            <MoveBook currentLocation={this.props.bookshelfValue} changeLocation={this.changeLocation}/>
              </div>
              <div className="book-title">{this.props.bookTitle}</div>
              <div className="book-authors">{this.props.bookAuthors}</div>
            </div>
        );
    }
};

Book.propTypes = {
    book: PropTypes.object,
    bookId: PropTypes.string,
    bookCoverURL : PropTypes.string,
    bookTitle: PropTypes.string.isRequired,
    bookshelfValue: PropTypes.string.isRequired,
    bookAuthors: PropTypes.array,
    moveBook: PropTypes.func,
};

export default Book;
