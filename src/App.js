import React from 'react';
import logo from './logo_js.png';
import marvel_logo from './marvel-logo.png';
import './App.css';

//NAVBAR DO SITE
function Navbar() {
  return(
    <div className="Navbar">
      <nav className="navbar navbar-light">
        <h1 className="text-secondary"><img src={marvel_logo}/></h1>
          <form className="form-inline">
          <input className="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search"/>
          <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Pesquisar</button>
          </form>
      </nav>
    </div>
  );
}

function Cards_group() {
  return(
    <div className="card-group">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  );
}

//MODELO CARD PARA O API
function Card() {
  return(
    <div className="col-md-4">
      <div className="Card card">
        <a href="https://developer.marvel.com/"><img className="card-img-top overflow" src={logo} /></a>
        <div className="card-body">
          <h5 className="card-title">Título</h5>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Cards_group/>
    </div>
  );
}

export default App;
