import React, { useState, useEffect } from 'react'

import { get } from 'axios'
import { Card, Navbar } from '../../components'

const CardList = ({ history }) => {
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (data.length === 0)
      get(
        'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b0b4a415d46b0895d453f5eef3a77553&hash=693262b478f39e0526fcc85703ce0846'
      ).then(({ data: { data: { results = [] } } }) => {
        setData(results)
      })
  })
  const handleSearch = value => {
    setSearch(value)
  }

  const regex = new RegExp(search, 'gi')
  const dataFiltered = data.filter(char => char.name.match(regex))

  return (
    <div className="App">
      <div className="App-header">
        <Navbar handleSearch={handleSearch} />
      </div>
      <div className="card-group">
        {dataFiltered.map((data, index) => (
          <Card history={history} key={index} data={data} />
        ))}
      </div>
    </div>
  )
}

export default CardList
