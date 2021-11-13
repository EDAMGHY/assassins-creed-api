import React from 'react';

const Header = ({ current, gameCurrent }) => {
  return (
    <header className='h-60 bg-light-hero'>
      <div className='container h-full flex justify-start items-center'>
        <h1 className='sm:text-6xl text-4xl text-hero font-homenaje tracking-widest'>
          HOME /{' '}
          <span
            className={`${
              gameCurrent ? 'uppercase' : 'uppercase line-through'
            }`}
          >
            {current}
          </span>
          {gameCurrent && (
            <>
              {' '}
              / <span className='line-through'>{gameCurrent}</span>
            </>
          )}
        </h1>
      </div>
    </header>
  );
};

export default Header;
