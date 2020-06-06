import React, { Component } from "react";
import Book from "./Book";

class Bookshelf extends Component {
  render() {
    const { books, onBookUpdate } = this.props;
    const currentlyReading = [];
    const read = [];
    const wantToRead = [];

    Object.values(books).forEach((book) => {
      if (book.shelf === "currentlyReading") {
        currentlyReading.push(book);
      }
      if (book.shelf === "read") {
        read.push(book);
      }
      if (book.shelf === "wantToRead") {
        wantToRead.push(book);
      }
    });

    return (
      <div className="bookshelf">
        {currentlyReading && (
          <div>
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {currentlyReading.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onUpdateBook={onBookUpdate} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
        {read && (
          <div>
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onUpdateBook={onBookUpdate} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
        {wantToRead && (
          <div>
            <h2 className="bookshelf-title">Want to read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead.map((book) => (
                  <li key={book.id}>
                    <Book book={book} onUpdateBook={onBookUpdate} />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Bookshelf;
