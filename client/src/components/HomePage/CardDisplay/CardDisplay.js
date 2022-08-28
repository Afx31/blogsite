import React from 'react';
import './CardDisplay.css';
import { Link } from 'react-router-dom';
import { Button } from 'rixun-ui';

const CardDisplay = ({ id, car, thumbnail, heading, description }) => {
  return (
    <>
      <div className='card-container'>
        <div className='layer' />
        <img className='card-img' src={thumbnail} alt='thumbnail' />
        <div className='card-content'>
          <h1>{heading}</h1>
          <p>{description}</p>
          <Link to={`/viewpost/${car}/${id}`}>
            <Button
              className='btn-readmore'
              name={`READ MORE`}
              type='outline'
            />
          </Link>
        </div>
      </div>
    </>
  )
};

export default CardDisplay;