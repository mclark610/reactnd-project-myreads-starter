import React from 'react';
import {getAll,search} from '../BooksAPI';
import BookCase from './bookcase';
import {Link} from 'react-router-dom';
import Book from './book';

class SearchBookstore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchValue: "",
        }
    }

    handleOnClick = (e) => {
    }

    handleOnChange = (e) => {
        console.log("e value: " + e.target.value);
        this.setState({searchValue: e.target.value});
        try {
            if (e.target.value) {
                search(e.target.value).then((books) => {
                    this.setState({books});
                    console.log('numbooks found: ' + (books? books.length:0));
                })
            }

        }
        catch(err) {
            console.log("oops! error handling search data: " + err.message);
        }
    }

    render() {
        return(
            <div className="search-books">
              <div className="search-books-bar">
                  <Link
                    to='/'
                    className='BookCase'
                  >
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
                    { this.state.books.map((book,idx) => {
                        return(
                            <li key={idx}>
                                <Book book={book} bookId={book.id} bookAuthors={book.authors} bookTitle={book.title} bookCoverURL={book.imageLinks.thumbnail} bookshelfValue={this.props.bookshelfValue} moveBook={this.props.moveBook}/>
                            </li>
                        );
                    })}
                </ol>
              </div>
            </div>
        )
    }
}

export default SearchBookstore;
