import React, { useState } from 'react'
import './App.css'
import { Navbar, Card } from '../components'

const App = () => {
  const [search, setSearch] = useState('')

  const handleSearch = value => {
    setSearch(value)
  }

  return (
    <div className="App">
      <div className="App-header">
        <Navbar handleSearch={handleSearch} />
      </div>
      <div className="card-group">
        <Card filter={search} />
      </div>
    </div>
  )
}

export default App
