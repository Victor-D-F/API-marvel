import React from 'react'

const Card = ({ data, history }) => {
  const onCLickImg = id => {
    history.push({
      pathname: '/char',
      search: `?id=${id}`
    })
  }

  return (
    <div style={{ padding: 15 }} className="col-md-4">
      <div className="Card card">
        <img
          alt="card"
          className="card-img-top overflow"
          style={{ maxHeight: 400 }}
          src={data.thumbnail.path + '.' + data.thumbnail.extension}
          onClick={() => onCLickImg(data.id)}
        />

        <div className="card-body">
          <h5 className="card-title">{data.name}</h5>
        </div>
      </div>
    </div>
  )
}

export default Card
