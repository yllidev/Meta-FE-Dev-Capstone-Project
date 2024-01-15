import React from 'react';
import './App.css';
import Nav from "./components/Nav"
import Main from "./components/Main"
import Menu from './components/Menu';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';


function App() {
  return (
 
    <>
      <Nav/>
      <Main />
      <Menu/>
      <Footer/>
    </>
  );
}

export default App;
