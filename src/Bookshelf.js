import React, { Component } from "react";

class Bookshelf extends Component {
  render() {
    const { books } = this.props;
    return (
      <div className="bookshelf">
        <div className="bookshelf-books">
          <ol className="books-grid">
            {Object.values(books).map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${book.imageLinks.thumbnail})`,
                      }}
                    />
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors[0]}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}

export default Bookshelf;
