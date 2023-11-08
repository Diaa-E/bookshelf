import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/colors.css";
import './styles/App.css';

import Form from './components/Form'
import Shelf from './components/Shelf';
import Book from './components/Book';
import { generateRandomNumber } from './utility';

function App() {

  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);

  function createNewBook(e, bookTitle, bookAuthor)
  {
    e.preventDefault();

    const newBook = (
        <Book 
          key={count}
          title={bookTitle}
          author={bookAuthor}
          style={{
            height: `${generateRandomNumber(200, 150)}px`,
            width: `${generateRandomNumber(25, 40)}px`,
            backgroundColor: `rgb(${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)}, ${generateRandomNumber(0, 256)})`,
            transform: `rotate(${generateRandomNumber(-20, 0)}deg)`
          }}
        />
    )

    setBooks([...books, newBook]);
    setCount(count + 1);
  }

  return (
    <>
      <Form submitHandler={createNewBook}/>
      <Shelf books={books}/>
    </>
  )
}

export default App
