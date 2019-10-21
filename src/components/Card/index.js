import React, { useState, useEffect } from 'react'

import { get } from 'axios'

const Card = ({ filter }) => {
  const [data, setData] = useState([])

  useEffect(() => {
    if (data.length === 0)
      get(
        'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=b0b4a415d46b0895d453f5eef3a77553&hash=693262b478f39e0526fcc85703ce0846'
      ).then(({ data: { data: { results = [] } } }) => {
        setData(results)
      })
  })

  const regex = new RegExp(filter, 'gi')
  const dataFiltered = data.filter(char => char.name.match(regex))

  return dataFiltered.map((char, index) => (
    <div key={index} style={{ padding: 15 }} className="col-md-4">
      <div className="Card card">
        <a href="https://developer.marvel.com/">
          <img
            alt="card"
            className="card-img-top overflow"
            style={{ maxHeight: 400 }}
            src={char.thumbnail.path + '.' + char.thumbnail.extension}
          />
        </a>
        <div className="card-body">
          <h5 className="card-title">{char.name}</h5>
        </div>
      </div>
    </div>
  ))
}

export default Card
