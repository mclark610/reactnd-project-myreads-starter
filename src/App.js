import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import BookCase from './components/bookcase';
import SearchBookstore from './components/search_bookstore';
import {Route} from 'react-router-dom';

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
          <Route exact path='/' render={() => <BookCase />} />
          <Route exact path='/search' render={()=> <SearchBookstore/>} />
      </div>
    )
  }
}

export default BooksApp
