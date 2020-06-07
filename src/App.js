import React from "react";
import * as BooksAPI from "./BooksAPI";
import "./App.css";
import Bookshelf from "./Bookshelf";
import SearchBooks from "./SearchBooks";
import { Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
    books: {},
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) =>
      this.setState({
        books,
      })
    );
  }

  handleBookUpdate = (book, shelf) => {
    const currentBooks = this.state.books.filter((a) => a.id !== book.id);
    book.shelf = shelf;
    BooksAPI.update(book, shelf).then(() =>
      this.setState({
        books: [...currentBooks, book],
      })
    );
  };

  render() {
    return (
      <div className="app">
        <Route
          exact
          path="/"
          render={() => (
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <Bookshelf
                    books={this.state.books}
                    onBookUpdate={this.handleBookUpdate}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/create">Add a book</Link>
              </div>
            </div>
          )}
        />
        <Route
          path="/create"
          render={({ history }) => (
            <SearchBooks
              books={this.state.books}
              onBookUpdate={this.handleBookUpdate}
            />
          )}
        />
      </div>
    );
  }
}

export default BooksApp;
