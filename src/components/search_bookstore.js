import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import {search,update} from '../BooksAPI';

import BookCase from './bookcase';
import Book from './book';

 /**
 * @description Busy component that handles data in the book store (search)
 * It also marks and updates the location of the book search books.
 * @constructor initializes search book array
 * @param {function} moveBook - uses the movebook function
 */

class SearchBookstore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    handleBookChange = (book,newLocation) => {
        let idx = this.state.books.findIndex(b => b.id === book.id);
        let books = [...this.state.books];

        books[idx].shelf=newLocation;

        this.setState({books});

        try {
            update(book,newLocation).then( res => {
            });
        }
        catch(err) {
            console.log("handleOnChange::updatecould not update " + book.title + " because of err: " + err.message);
        }

        this.props.moveBook(book,newLocation);
    }

     handleOnChange = (e) => {
        try {
            if (e.target.value) {
                  search(e.target.value).then((books) => {
                    this.setState({books});
                })
            }
        }
        catch(err) {
            console.log("handleOnChange::oops! error handling search data: " + err.message);
        }
    }

    render() {
        return(
            <div className="search-books">
              <div className="search-books-bar">
                <Link
                  to='/'
                  className={'BookCase'}>
                  <button className="close-search" onClick={this.handleOnClick}>Close</button>
                </Link>

                <div className="search-books-input-wrapper">
                  {/*
                    NOTES: The search from BooksAPI is limited to a particular set of search terms.
                    You can find these search terms here:
                    https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                    However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                    you don't find a specific author or title. Every search is limited by search terms.
                  */}
                  <input type="text" onChange={this.handleOnChange} placeholder="Search by title or author"/>
                </div>
              </div>
              <div className="search-books-results">
                <ol className="books-grid">
                    {
                        this.state.books && this.state.books.length ? this.state.books.map((book,idx) => {
                        return(
                            <li key={uuidv4()}>
                              <Book book={book}
                                    bookshelfValue={(book.hasOwnProperty('shelf')? book.shelf:'none')}
                                    moveBook={this.props.moveBook}/>
                            </li>
                        );

                    }):('')}
                </ol>
              </div>
            </div>
        )
    }
}

SearchBookstore.propTypes = {
    moveBook: PropTypes.func.isRequired,
}

export default SearchBookstore;
