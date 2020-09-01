import React from 'react';

class Book extends React.Component {
  render() {

    const book = this.props.book;

    return (
      <div>
        <div>
          <h1>{book.title}</h1>
          <div>{book.description}</div>
          <div>{book.pages} Pages</div>
        </div>
        <div>
          <img src={book.cover} />
        </div>
        <div>
          <div>Minimum price {book.minimumPrice}$</div>
          <div>Preferable price {book.preferablePrice}$</div>
        </div>
      </div>
    )
  }
}

export default Book;
