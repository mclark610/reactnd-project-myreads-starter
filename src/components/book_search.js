import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
class Search extends React.Component {
    constructor() {
        super();
    }
    render() {
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
}

Search.propTypes = {
    doShowPage: PropTypes.func.isRequired,
};


export default Search;
