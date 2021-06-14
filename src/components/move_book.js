import React from 'react';
import PropTypes from 'prop-types';

/*MoveBook
 * select to pass back the new location of the book
 * it is called from
 */

class MoveBook extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shelf: this.props.currentLocation,
        }
    }

    handleOnChange = (e) => {
        if ((this.props.currentLocation !== e.target.value) &&
            (e.target.value !=="move")) {
                this.props.changeLocation( e.target.value );
        }
    }

    render() {
        return(
            <div className="book-shelf-changer">
              <select value={this.props.currentLocation} onChange={this.handleOnChange}>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
        );
    }
}

MoveBook.propTypes = {
    currentLocation: PropTypes.string.isRequired,
    changeLocation: PropTypes.func.isRequired,
}

export default MoveBook;
