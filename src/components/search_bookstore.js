import React from 'react';
import {getAll,search} from '../BooksAPI';
import BookCase from './bookcase';
import {Link} from 'react-router-dom';
import Book from './book';
import {update} from '../BooksAPI';

class SearchBookstore extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
        }
    }

    handleBookChange = (book,newLocation) => {
        let idx = this.state.books.findIndex(b => b.id === book.id);
        console.log("handleBookChange idx is " + idx);
        console.log("handleBookChange newLocation is : " +newLocation);

        let books = [...this.state.books];
        books[idx].shelf=newLocation;
        this.setState({books});
        console.log("book is now " + JSON.stringify(books[idx]));

        try {
            update(book,newLocation).then( res => {
                console.log("moveBook res: " + JSON.stringify(res));
            });

            this.state.books.filter((b) => b.id !== book.id);
        }
        catch(err) {
            console.log("could not update " + book.title + " because of err: " + err.message);
        }

        this.props.moveBook(book,newLocation);
    }

    handleOnClick = (e) => {
    }

     handleOnChange = (e) => {
        console.log("e value: " + e.target.value);
        this.setState({searchValue: e.target.value});
        try {
            if (e.target.value) {
                console.log("search for book value: " + e.target.value);
//                search(e.target.value).then((books) => {
                  search(e.target.value).then((books) => {

                    console.log('numbooks before setstate found: ' + books.length);
                    this.setState({books});
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
                    {  this.state.books && this.state.books.length && this.state.books.map((book,idx) => {
                        return(

                            <li key={idx}>
                                {console.log("numbooks: " + this.state.books.length)}
                                <Book book={book}
                                      bookId={book.id}
                                      bookAuthors={book.authors}
                                      bookTitle={book.title}
                                      bookCoverURL={(book.hasOwnProperty('imageLinks.thumbnail')?book.imageLinks.thumbnail:'')}
                                      bookshelfValue={(book.hasOwnProperty('shelf')? book.shelf:'none')}
                                      moveBook={this.props.moveBook}/>
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
