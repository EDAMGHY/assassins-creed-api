import React from 'react';

const DocsInfo = () => {
  return (
    <div
      className='
              flex-2
              sm:w-auto
              w-full
              sm:self-start
              self-center
              mx-3
              sm:my-0
              my-2
              bg-transparent
              shadow-md
              p-4
              text-gray-800
            '
    >
      <h2
        className='
                sm:text-5xl
                text-3xl
                my-2
                font-homenaje
                tracking-widest
                font-semibold
                text-gray-800
                uppercase
              '
      >
        Overview
      </h2>
      <div className='w-24 rounded h-1 bg-hero'></div>
      <div id='intro' className='my-5'>
        <h3 className='sm:text-2xl text-lg font-medium tracking-widest my-2'>
          Introduction
        </h3>
        <p
          className='
                  sm:font-normal
                  font-light
                  sm:text-base
                  text-sm
                  tracking-wide
                '
        >
          After finishing almost all of the Assassin's Creed Franchise Games. I
          decided to set out a goal to create a simple and easy service where
          you can find all of the Main Assassin's Creed Franchise Games
          detailed.
        </p>
      </div>
      <div id='about' className='my-5'>
        <h3 className='sm:text-2xl text-lg font-medium tracking-widest my-2'>
          About the API
        </h3>
        <p
          className='
                  sm:font-normal
                  font-light
                  sm:text-base
                  text-sm
                  tracking-wide
                '
        >
          The Assassin's Creed API is simple API that provides you with all of
          the main games of the Assassin's Creed Franchise in details where you
          can find the name, genre, engine, developer, composer, synopsis, and
          more.
        </p>
      </div>

      <div id='getting' className='my-5'>
        <h3 className='sm:text-2xl text-lg font-medium tracking-widest my-2'>
          Getting Started
        </h3>
        <p
          className='
                  sm:font-normal
                  font-light
                  sm:text-base
                  text-sm
                  tracking-wide
                  pb-3
                '
        >
          You can start using this API with the URL below as the MAIN Endpoint
          and begin creating your own application.
        </p>
        <div
          className='
                  rounded
                  bg-gray-800
                  py-2
                  sm:text-base
                  text-xs
                  sm:px-5
                  px-2
                  text-white
                '
        >
          <code> https://localhost:5000/api/v1/ </code>
        </div>
      </div>
      <h2
        className='
                sm:text-5xl
                text-3xl
                my-2
                font-homenaje
                tracking-widest
                font-semibold
                text-gray-800
                uppercase
              '
      >
        Endpoints
      </h2>
      <div className='w-24 rounded h-1 bg-hero'></div>
      <div id='all'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-6
                  mb-2
                  font-homenaje
                '
        >
          GET All Game :
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code> https://localhost:5000/api/games </code>
        </div>
      </div>
      <div id='gameByID'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Single Game By ID :
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code> https://localhost:5000/api/1 </code>
        </div>
      </div>
      <div id='gameByName'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Single Game By Name :
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code> https://localhost:3000/api/assassinscreed </code>
        </div>
      </div>
      <div id='gameByEngine'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Games By Engine
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code> http://localhost:5000/api/v1/games?engine=Anvil </code>
        </div>
      </div>
      <div id='gameByRemastered'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Remastered Games
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code> http://localhost:5000/api/v1/games?remastered=true </code>
        </div>
      </div>
      <div id='gameByYear'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Games By Year
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code> http://localhost:5000/api/v1/games?year=2014 </code>
        </div>
      </div>
      <div id='gameByDeveloper'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Games By Developer
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code>
            http://localhost:5000/api/v1/games?developer=Ubisoft Montreal
          </code>
        </div>
      </div>
      <div id='gameByPlatform'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Games By Platform
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code>http://localhost:5000/api/v1/games?platform=PlayStation 4</code>
        </div>
      </div>
      <div id='gameByComposer'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Games By Composer
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code>
            http://localhost:5000/api/v1/games?composer=Austin Wintory
          </code>
        </div>
      </div>
      <div id='gameBySort'>
        <h3
          className='
                  sm:text-xl
                  text-base
                  font-medium
                  tracking-widest
                  mt-4
                  mb-2
                  font-homenaje
                '
        >
          GET Sorted Games (asc/desc) DEFAULT: asc
        </h3>
        <div
          className='
                  bg-gray-300
                  rounded
                  py-2
                  sm:px-5
                  px-2
                  sm:text-base
                  text-xs
                '
        >
          <code>http://localhost:5000/api/v1/games?sort=desc</code>
        </div>
      </div>
    </div>
  );
};

export default DocsInfo;
