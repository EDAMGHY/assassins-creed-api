import React from 'react';

const Game = ({
  id,
  poster,
  name,
  release_date,
  genre,
  developer,
  engine,
  composer,
}) => {
  return (
    <div className='card lg:mx-0 mx-auto'>
      <div className='card-inner'>
        <div className='card-front'>
          <img className='rounded-lg' src={poster} alt={name} />
        </div>
        <div className='card-back bg-gray-800 text-hero rounded-lg'>
          <h1 className='sm:text-3xl text-xl'>{name}</h1>
          <ul className='mb-5 sm:text-lg text-base'>
            <li className='sm:text-2xl text-base text-center'>
              <strong className='text-white'>{release_date}</strong>
            </li>
            <li>
              <strong className='text-white'>Genre:</strong> {genre}
            </li>
            <li>
              <strong className='text-white'>Developer:</strong>{' '}
              {developer.map((com) => `${com}, `)}
            </li>
            <li>
              <strong className='text-white'>Engine:</strong> {engine}
            </li>
            <li>
              <strong className='text-white'>Composer:</strong>{' '}
              {composer.map((com) => `${com}, `)}
            </li>
          </ul>
          <a
            className='
                    sm:py-2
                    py-1
                    px-2
                    sm:px-4
                    font-bold
                    sm:text-base
                    text-sm text-white
                    bg-hero
                    rounded-sm
                    ring-4 ring-light-hero
                    uppercase
                  '
            href={`/games/${id}`}
          >
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Game;
