import ReactDom from 'react-dom';
import React from 'react';

import App from './App';

const book = {
    title: "Buddha's Little Finger",
    description: "Peleven's critically acclaimed novel tells the story of a poet from St. Petersburg who finds himself caught in a temporal tug of war: on one hand, he's walking a tightrope between Reds and Whites during the Russian Revolution, and on the other, he's floating in and out of the bizarre world of a psychiatric hospital in 1990's Moscow.",
    pages: 448,
    language: 'en',
    progress: 10,
    cover: 'https://images-na.ssl-images-amazon.com/images/I/311nMkuZeiL._BO1,204,203,200_.jpg',
    authors: [
        { name: 'Victor Pelevin', email: 'vp@gmail.com', avatar: 'https://images.eksmo.ru/upload/iblock/ea3/Pelevin_min.jpg', description: 'empty' }
    ],
    minimumPrice: 10,
    preferablePrice: 20,
    collectedAmount: 1000,
    expectedAmount: 2000
}

ReactDom.render(
    < App book={book} />,
    document.getElementById('root')
);
