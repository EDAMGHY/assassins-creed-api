import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../resources/cropped.png';
const Hero = () => {
  return (
    <section className='h-hero'>
      <div
        className='
          sm:h-full
          h-mobile-hero
          bg-hero-image
          w-full
          bg-top bg-cover bg-no-repeat
        '
      >
        <div
          className='
            container
            flex
            justify-center
            items-center
            h-full
            sm:flex-row
            flex-col
          '
        >
          <div
            className='
              animate-slideTop
              sm:animate-slideRight
              flex
              justify-center
              sm:items-start
              items-center
              flex-col
              w-full
            '
          >
            <h1
              className='
                lg:text-8xl
                sm:text-7xl
                text-5xl text-center
                sm:text-left
                font-extrabold font-homenaje
                uppercase
                tracking-widest
                mb-6
                text-gray-800
              '
            >
              Assassin's Creed API
            </h1>
            <p
              className='
                text-gray-800
                lg:text-xl
                sm:text-lg
                text-sm
                font-medium
                text-center
                sm:text-left
                mb-6
                w-11/12
                tracking-wider
              '
            >
              Assassin's Creed API is a simple API that provides to you all of
              the main Assassin's Creed Games in details
            </p>
            <Link
              to='/docs'
              className='
                bg-hero
                sm:py-3 sm:px-6
                py-2
                px-4
                text-xs
                sm:text-base
                rounded-md
                font-bold
                uppercase
                text-white
                ring-4 ring-hero ring-opacity-40
                cursor-pointer
                hover:bg-transparent hover:text-hero hover:ring-hero
                transition-colors
                duration-200
                ease-in
                font-roboto
                tracking-widest
              '
            >
              Get Started
            </Link>
          </div>
          <img
            src={heroImage}
            alt='Assassins Creed...'
            className='
              animate-slideBottom
              sm:animate-slideLeft sm:h-auto sm:inline
              none
              h-1/2
              hidden
              m-0
              w-1/2
            '
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
