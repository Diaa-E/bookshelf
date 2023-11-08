import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import "./styles/reset.css";
import "./styles/colors.css";
import './styles/App.css';

import Form from './components/Form'
import Shelf from './components/Shelf';
import Book from './components/Book';

function App() {

  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);

  function createNewBook(e)
  {
    e.preventDefault();

    const newBook = (
        <Book 
          key={count}
          title={e.target.elements.bookTitle.value}
          author={e.target.elements.bookAuthor.value}
        />
    )

    e.target.elements.bookTitle.value = "";
    e.target.elements.bookAuthor.value = "";

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
