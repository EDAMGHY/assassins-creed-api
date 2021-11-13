import React from 'react';
import Me from '../resources/photo me.jpeg';

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white sm:py-10 py-5 sm:px-14 px-6 font-homenaje'>
      <div className='container flex justify-between items-start lg:flex-row flex-col'>
        <div>
          <h1 className='text-3xl text-hero uppercase font-bold tracking-widest'>
            About Me
          </h1>
          <div className='flex justify-center items-center sm:flex-row flex-col mt-10'>
            <img
              src={Me}
              className='
                rounded-full
                w-24
                h-24
                sm:mr-5
                mr-0
                filter
                grayscale
                transition-all
                duration-700
                ease-out
                hover:grayscale-0
              '
              alt='me'
            />
            <p className='sm:w-96 w-auto text-lg tracking-wider mt-5 sm:mt-0'>
              My name is DAMRI Abdellah. I am a Web Developer and a GAMES
              enthusiastic who he likes building things on the internet and
              loves The Assassin's Creed Franchise.
            </p>
          </div>
        </div>
        <div>
          <h1
            className='
              text-3xl text-hero
              uppercase
              font-bold
              tracking-widest
              mt-8
              lg:mt-0
            '
          >
            SiteMap
          </h1>
          <ul className='divide-y-4 divide-solid divide-light-hero mt-6 text-xl'>
            <li className='py-2 hover:text-hero'>
              <a href='index.html'>Home</a>
            </li>
            <li className='py-2 hover:text-hero'>
              <a href='games.html'>Games</a>
            </li>
            <li className='py-2 hover:text-hero'>
              <a href='docs.html'>Docs</a>
            </li>
          </ul>
        </div>
        <div>
          <h1
            className='
              text-3xl text-hero
              uppercase
              font-bold
              tracking-widest
              mt-8
              lg:mt-0
            '
          >
            Socials
          </h1>
          <ul className='flex justify-center items-center sm:mt-16 mt-10'>
            <li className='px-2 mx-2'>
              <a
                className='
                  p-2
                  sm:text-3xl
                  text-xl
                  hover:bg-light-hero hover:text-gray-800
                  rounded-full
                  transition-colors
                  duration-300
                  ease-out
                '
                target='_blank'
                rel='noreferrer'
                href='https://github.com/EDAMGHY'
              >
                <i className='fab fa-github'></i>
              </a>
            </li>
            <li className='px-2 mx-2'>
              <a
                className='
                  p-2
                  sm:text-3xl
                  text-xl
                  hover:bg-light-hero hover:text-gray-800
                  rounded-full
                  transition-colors
                  duration-300
                  ease-out
                '
                target='_blank'
                rel='noreferrer'
                href='https://www.linkedin.com/in/abdellah-damri/'
              >
                <i className='fab fa-linkedin'></i>
              </a>
            </li>
            <li className='px-2 mx-2'>
              <a
                className='
                  p-2
                  sm:text-3xl
                  text-xl
                  hover:bg-light-hero hover:text-gray-800
                  rounded-full
                  transition-colors
                  duration-300
                  ease-out
                '
                target='_blank'
                rel='noreferrer'
                href='https://www.instagram.com/a_bdell_/'
              >
                <i className='fab fa-instagram'></i>
              </a>
            </li>

            <li className='px-2 mx-2'>
              <a
                className='
                  p-2
                  sm:text-3xl
                  text-xl
                  hover:bg-light-hero hover:text-gray-800
                  rounded-full
                  transition-colors
                  duration-300
                  ease-out
                '
                target='_blank'
                rel='noreferrer'
                href='https://twitter.com/damriabdellah'
              >
                <i className='fab fa-twitter'></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='mt-8' />
      <p className='text-center mt-10 tracking-widest text-lg'>
        &copy; Copyright 2021 All Rights Reserved By DAMRI ABDELLAH
      </p>
    </footer>
  );
};

export default Footer;
