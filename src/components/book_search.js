import React from 'react';
import {Link} from 'react-router-dom';

/* Search
 * Routes to the Search book page from the bookapp
 */
 
const Search = () => {
    return(
        <div className="open-search">
          <Link
            to='/search'
            className='SearchBookStore'
          >
            <button type="button">
              Add a Book
            </button>
          </Link>
        </div>
    );
}

export default Search;
