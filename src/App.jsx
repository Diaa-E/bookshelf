import { useState } from 'react';

import "./styles/reset.css";
import "./styles/fonts.css";
import "./styles/colors.css";
import './styles/App.css';

import Form from './components/Form'
import Shelf from './components/Shelf';
import Book from './components/Book';
import { generateRandomNumber, generateRandomColorHSL } from './utility';

function App() {

  const [books, setBooks] = useState([]);
  const [count, setCount] = useState(0);

  function addBook(e, bookTitle, bookAuthor, pages, isRead, colorMode, color)
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
        backgroundColor: colorMode === 0 ? color : generateRandomColorHSL({upper: 0, lower: 259}, {upper: 100, lower: 0}, {upper: 100, lower: 0}),
        transform: `rotate(${generateRandomNumber(-20, 0)}deg)`,
      }
    }]);

    setCount(count + 1);
  }

  function deleteBook(e, bookId)
  {
    e.stopPropagation();
    const updatedBooks = books.filter(book => book.id !== bookId)

    setBooks(updatedBooks);
  }

  function toggleBookRead(e, bookId)
  {
    e.stopPropagation();
    const updatedBooks = [...books];
    const targetBook = updatedBooks.find(book => book.id === bookId);
    
    //spread operator doesn't overwrite same key value like with objects
    Object.assign(
      targetBook,
      {
        ...targetBook,
        isRead: !targetBook.isRead,
      }
    )

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
          clickHandler={toggleBookRead}
        />
      ))}/>
    </>
  )
}

export default App
