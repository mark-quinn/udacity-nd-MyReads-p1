import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import Book from "./Book";

class SearchBooks extends Component {
  state = {
    query: "",
    results: [],
  };

  handleSearch = (event) => {
    event.preventDefault();
    this.setState(
      {
        query: event.target.value,
      },
      this.fetchBooks
    );
  };

  fetchBooks = () => {
    if (!this.state.query) {
      this.setState({
        results: []
      })
      return;
    }
    BooksAPI.search(this.state.query).then((books) => {
      if (books && books.error) books = [];
      this.setState({
        results: books,
      });
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(e) => this.handleSearch(e)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {this.state.results && (
            <ol className="books-grid">
              {Object.values(this.state.results).map((book) => (
                <li key={book.id}>
                  <Book book={book} onUpdateBook={this.props.onBookUpdate} />
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    );
  }
}

export default SearchBooks;
