import React from 'react';

const SideNav = () => {
  return (
    <div
      className='
              w-full
              flex-1
              sm:w-auto
              bg-gray-300
              rounded-md
              shadow-md
              px-4
              py-5
              self-start
            '
    >
      <div>
        <h2
          className='
                  text-xl
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
        <ul
          className='
                  font-homenaje font-medium
                  text-lg
                  sm:text-xl
                  text-gray-800
                  tracking-widest
                  divide-y-2 divide-solid divide-light-hero
                '
        >
          <li className='group py-1'>
            <a
              href='#intro'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Introduction
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#about'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              About the API
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#getting'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Getting Started
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h2
          className='
                  text-xl
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
        <ul
          className='
                  font-homenaje font-medium
                  text-lg
                  sm:text-xl
                  text-gray-800
                  tracking-widest
                  divide-y-2 divide-solid divide-light-hero
                '
        >
          <li className='group py-1'>
            <a
              href='#all'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              All Games
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByID'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Single Game By ID
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByName'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Single Game By Name
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByEngine'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Games By Engine
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByRemastered'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Remastered Games
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByYear'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Games By Year
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByDeveloper'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Games By Developer
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByPlatform'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Games By Platforms
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameByComposer'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Games By Composer
            </a>
          </li>
          <li className='group py-1'>
            <a
              href='#gameBySort'
              className='
                      group-hover:text-hero
                      transition-colors
                      duration-500
                      ease-out
                    '
            >
              Sorted Games
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideNav;
