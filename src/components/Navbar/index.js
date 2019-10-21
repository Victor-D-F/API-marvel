import React, { useState } from 'react'

import marvelLogo from '../../Img/marvel-logo.png'

const Navbar = ({ handleSearch }) => {
  const handleSubmit = evt => {
    evt.preventDefault()
    handleSearch(evt.target.value)
  }

  return (
    <div className="Navbar">
      <nav className="navbar navbar-light">
        <h1 className="text-secondary">
          <img alt="Mervel Logo" src={marvelLogo} />
        </h1>
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Pesquisar"
            aria-label="Search"
            onChange={e => handleSubmit(e)}
          />
        </form>
      </nav>
    </div>
  )
}

export default Navbar
