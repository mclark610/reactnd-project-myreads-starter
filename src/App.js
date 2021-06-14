import React from 'react'

import './App.css'
import BookCase from './components/bookcase';
import SearchBookstore from './components/search_bookstore';
import {Route} from 'react-router-dom';
import {getAll,update} from './BooksAPI';

/* BooksApp
 * Handling the data for the bookcase.
 */
class BooksApp extends React.Component {
  constructor() {
      super();
      this.state = {
          books: [],
      }
  }
  async componentDidMount() {
      try {
          await getAll().then((books) => {
              this.setState({books});
          })
      }
      catch(err) {
          console.log("BookApp::componentDidMount error handling search data: " + err.message);
      }
  }

  moveBook = (book,newLocation) => {
      let idx = this.state.books.findIndex(b => b.id === book.id);
      // coming from SearchBookstore
      // new book.
      if (idx === -1) {
          book.shelf = newLocation;
          this.setState({
              books:[...this.state.books, book]
          });
      }
      else {

          let books = [...this.state.books];
          books[idx].shelf=newLocation;
          this.setState({books});
      }

      try {
          book.shelf=newLocation;
          update(book,newLocation).then( res => {
          });
      }
      catch(err) {
          console.log("could not update " + book.title + " because of err: " + err.message);
      }
  }

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => <BookCase books={this.state.books} moveBook={this.moveBook}/>} />
          <Route exact path='/search' render={()=> <SearchBookstore books={this.state.books} moveBook={this.moveBook}/>} />
      </div>
    )
  }
}

export default BooksApp
