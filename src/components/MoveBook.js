import React from 'react';
import PropTypes from 'prop-types';

 /**
 * @description  select to pass back the new location of the book
  * it is called from.
 * @constructor
 * @param {string} currentLocation -current location of book
 * @param {string} changeLocation - move book to changeLocation
 */

const MoveBook = (props) => {
    const handleOnChange = (e) => {
        if ((props.currentLocation !== e.target.value) &&
            (e.target.value !=="move")) {
                props.changeLocation( e.target.value );
        }
    }

    return(
        <div className="book-shelf-changer">
          <select value={props.currentLocation} onChange={handleOnChange}>
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
    );
}

MoveBook.propTypes = {
    currentLocation: PropTypes.string.isRequired,
    changeLocation: PropTypes.func.isRequired,
}

export default MoveBook;
