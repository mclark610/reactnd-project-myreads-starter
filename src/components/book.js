import React from 'react';
import PropTypes from 'prop-types';
import MoveBook from './move_book';

class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
//        console.log("IN BOOKS: " + JSON.stringify(props.book));
    }
    changeLocation = (newLocation) => {
        this.props.moveBook(this.props.book,newLocation);
    }
    componentDidMount() {
//        console.log("book url: " + this.props.book.imageLinks.thumbnail);
        if ( this.props.book.hasOwnProperty('imageLinks')) {
            console.log("IMAGELINKS FOUND  FOR BOOK : " + this.props.book.title);
            let url = this.props.book.imageLinks.thumbnail;
            this.setState({url})
        }
        else {
            console.log("IMAGELINKS NOT FOUND FOR BOOK : " + this.props.book.title);
        }
        console.log("TITLE: " + this.props.book.title);
        console.log("SHELF: " + this.props.book.shelf);
    }

    render() {
        return(
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{
                    width: 128,
                    height: 193,
                    backgroundImage: `url(${this.state.url})`
                }}></div>
            <MoveBook currentLocation={this.props.bookshelfValue} changeLocation={this.changeLocation}/>
              </div>
              <div className="book-title">{this.props.book.title}</div>
              <div className="book-authors">{this.props.book.authors}</div>
            </div>
        );
    }
};

Book.propTypes = {
    book: PropTypes.object.isRequired,
    bookId: PropTypes.string,
    bookCoverURL : PropTypes.string,
    bookTitle: PropTypes.string.isRequired,
    bookshelfValue: PropTypes.string.isRequired,
    bookAuthors: PropTypes.array,
    moveBook: PropTypes.func,
};

export default Book;
