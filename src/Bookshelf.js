import React, { Component } from "react";

class Bookshelf extends Component {
  render() {
    const { books } = this.props;
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
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${
                              book.imageLinks.thumbnail
                            })`,
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
        )}
        {read && (
          <div>
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {read.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${
                              book.imageLinks.thumbnail
                            })`,
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
        )}
        {wantToRead && (
          <div>
            <h2 className="bookshelf-title">Want to read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {wantToRead.map((book) => (
                  <li key={book.id}>
                    <div className="book">
                      <div className="book-top">
                        <div
                          className="book-cover"
                          style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${
                              book.imageLinks.thumbnail
                            })`,
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
        )}
      </div>
    );
  }
}

export default Bookshelf;
