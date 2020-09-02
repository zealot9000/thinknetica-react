import React from 'react';
import Book from './Book';
import Author from './Author';

import book from './book.json';

import './index.css'

class App extends React.Component {
    render() {
        return (
            <>
                <header>
                    Bookshop
                </header>
                <main>
                    <Book book={book} />
                    <Author author={book.authors} />
                </main>
                <footer>&copy; {new Date().getFullYear()}</footer>
            </>
        );
    }
}

export default App;
