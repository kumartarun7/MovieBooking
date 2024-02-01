import React from 'react'
import { Link } from 'react-router-dom';

const Card = (props) => {
  return (
      <div className="card">
    <img src={props.image} alt="Movie Title"/>
    <div className="card-content">
      <h2 className="card-title">{props.name}</h2>
      <pre className="card-rating">Rating :{props.rating}</pre>
     <Link className='link' to={`/movie/${props.name}`}>Click Here</Link>
    </div>
    </div>
  )
}

export default Card;
