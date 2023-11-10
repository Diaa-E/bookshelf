import { useState } from 'react';

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

  function addBook(e, bookTitle, bookAuthor, pages, isRead)
  {
    e.preventDefault();

    setBooks([...books, {
      id: count,
      title: bookTitle,
      author: bookAuthor,
      pages: pages,
      isRead: isRead,
      style:{
        height: `${generateRandomNumber(200, 150)}px`,
        width: `${generateRandomNumber(25, 40)}px`,
        backgroundColor: `hsl(${generateRandomNumber(0, 359)}, ${generateRandomNumber(0, 100)}%, ${generateRandomNumber(0, 50)}%)`,
        transform: `rotate(${generateRandomNumber(-20, 0)}deg)`,
      }
    }]);

    setCount(count + 1);
  }

  function deleteBook(bookId)
  {
    const updatedBooks = books.filter(book => book.id !== bookId)

    setBooks(updatedBooks);
  }

  return (
    <>
      <Form submitHandler={addBook}/>
      <Shelf books={books.map(book => (
        <Book
          id={book.id}
          title={book.title}
          key={book.id}
          author={book.author}
          style={book.style}
          deleteHandler={deleteBook}
          pages={book.pages}
          isRead={book.isRead}
        />
      ))}/>
    </>
  )
}

export default App
