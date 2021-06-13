import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/bookcase';
import SearchBookstore from './components/search_bookstore';
import {Route} from 'react-router-dom';
import {getAll,get,update} from './BooksAPI';

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
          console.log("oops! error handling search data: " + err.message);
      }
  }

  moveBook = (book,newLocation) => {
      let idx = this.state.books.findIndex(b => b.id === book.id);
      // coming from SearchBookstore
      // new book.
      console.log("movebooks idx is " + idx);
      console.log("movebooks newLocation is : " +newLocation);
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
          console.log("book is now " + JSON.stringify(books[idx]));
      }

      try {
          update(book,newLocation).then( res => {
              console.log("moveBook res: " + JSON.stringify(res));
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
