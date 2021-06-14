import React from 'react';
import PropTypes from 'prop-types';
import MoveBook from './move_book';
/*
 * Book:
 *   Main goal is to display individual books.
 *   Error handling: url may be missing.  can move this back?
*/
class Book extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            url: ''
        }
    }

    changeLocation = (newLocation) => {
        this.props.moveBook(this.props.book,newLocation);
    }

    componentDidMount() {
        if ( this.props.book.hasOwnProperty('imageLinks')) {
            let url = this.props.book.imageLinks.thumbnail;
            this.setState({url})
        }
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
    bookshelfValue: PropTypes.string.isRequired,
    moveBook: PropTypes.func,
};

export default Book;
