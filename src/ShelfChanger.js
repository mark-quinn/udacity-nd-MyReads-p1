import React, { Component } from "react";

class ShelfChanger extends Component {
  render() {
    const { updateBook, book } = this.props;

    return (
      <div className="book-shelf-changer">
        <select
          value={book.shelf}
          onChange={(e) => updateBook(book, e.target.value)}
        >
          <option value="move" disabled>
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

export default ShelfChanger;
