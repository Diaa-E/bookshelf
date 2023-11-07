import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

import "./styles/reset.css";
import "./styles/colors.css";
import './styles/App.css';

import AddBookForm from './components/AddBookForm'

function App() {

  return (
    <>
      <AddBookForm/>
    </>
  )
}

export default App
