import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom';

const Creatures = ({data}) => {
  const displayCreatures = data.map(creature => {
    const { id, image, name, type } = creature;
    return (
      <Link to={`/${type}/${id}`}>
        <img src={image} alt={name} className="app-img" key={id} type={type}/>
      </Link>
      )
  })

  return (
    <>
      <h1>Creatures!</h1>
      {displayCreatures}
    </>
  )
}

export default Creatures;