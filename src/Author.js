import React from 'react';

class Author extends React.Component {
  render() {

    const authors = this.props.author.map((author) =>
      <div key={author.id}>{author.name} {author.email} <img src={author.avatar} /></div>
    );

    return (<div>{authors}</div>)
  }
}

export default Author;
