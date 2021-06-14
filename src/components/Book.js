import React from 'react';
import PropTypes from 'prop-types';
import MoveBook from './MoveBook';

/**
* @description Main goal is to display individual books.
* @constructor requires url - error handling state required for now
* @param {object} book - The book object
* @param {string} bookshelfValue - the bookshelf where the book resides
* @param {func} moveBook - if the book moves, this function does that.
*/

const Book = (props) => {

    const validateURL = () => {
        let url = '';
        if ( props.book.hasOwnProperty('imageLinks')) {
            url = props.book.imageLinks.thumbnail;
        }
        return(url);
    }

    const changeLocation = (newLocation) => {
        props.moveBook(props.book,newLocation);
    }

    return(
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${validateURL()})`
            }}></div>
        <MoveBook currentLocation={props.bookshelfValue} changeLocation={changeLocation}/>
          </div>
          <div className="book-title">{props.book.title}</div>
          <div className="book-authors">{props.book.authors}</div>
        </div>
    );
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookshelfValue: PropTypes.string.isRequired,
    moveBook: PropTypes.func,
};

export default Book;
