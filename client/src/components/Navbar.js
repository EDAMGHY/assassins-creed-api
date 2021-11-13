import React from 'react';
import Logo from '../resources/assassins-creed-22690.png';
import { Link } from 'react-router-dom';

const Navbar = ({ current }) => {
  return (
    <nav className='bg-light py-2' id='navbar'>
      <div
        className='
          container
          h-full
          flex
          justify-between
          items-center
          sm:flex-row
          flex-col
        '
      >
        <Link to='/'>
          <img
            src={Logo}
            alt="Assassin's Creed Logo"
            className='h-12 object-cover mb-2 sm:mb-0'
          />
        </Link>
        <ul
          className='
            flex
            text-white
            font-bold
            tracking-widest
            uppercase
            font-homenaje
            bg-gray-800
            sm:mt-0
            mt-4
          '
        >
          <li className='group py-2'>
            <Link
              className={`
              cursor-pointer
              py-2
              px-6
               border-b-4
              transition-colors
              duration-500
              ease-in-out
              ${
                current === 'home'
                  ? 'text-hero border-white group-hover:text-white group-hover:border-hero'
                  : 'text-white border-hero group-hover:text-hero group-hover:border-white'
              }
              
              `}
              to='/'
            >
              Home
            </Link>
          </li>
          <li className='group py-2'>
            <Link
              className={`
              cursor-pointer
              py-2
              px-6
               border-b-4
              transition-colors
              duration-500
              ease-in-out
              ${
                current === 'games'
                  ? 'text-hero border-white group-hover:text-white group-hover:border-hero'
                  : 'text-white border-hero group-hover:text-hero group-hover:border-white'
              }
              
              `}
              to='/games'
            >
              Games
            </Link>
          </li>
          <li className='group py-2'>
            <Link
              className={`
              cursor-pointer
              py-2
              px-6
               border-b-4
              transition-colors
              duration-500
              ease-in-out
              ${
                current === 'docs'
                  ? 'text-hero border-white group-hover:text-white group-hover:border-hero'
                  : 'text-white border-hero group-hover:text-hero group-hover:border-white'
              }
              
              `}
              to='/docs'
            >
              Docs
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
