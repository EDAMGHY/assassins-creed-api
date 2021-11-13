import React, { useEffect } from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import { useGlobalContext } from '../context';

const SingleGamePage = ({
  current,
  gameCurrent,
  setCurrent,
  setGameCurrent,
}) => {
  const { id } = useParams();
  const { singleGame, fetchSingleGame } = useGlobalContext();

  useEffect(() => {
    fetchSingleGame(id);
    document.title = `${singleGame.name}`;
    setCurrent(document.title.toLowerCase());
    setGameCurrent(singleGame.name);
    // eslint-disable-next-line
  }, [singleGame.name, id]);
  const {
    name,
    poster,
    composer,
    developer,
    remastered,
    synopsis,
    ESRB_rating,
    platforms,
    engine,
    release_date,
    genre,
    publisher,
    trailer,
    website,
  } = singleGame;

  return (
    <React.Fragment>
      <Header current={current} gameCurrent={gameCurrent} />
      <section className='sm:p-8 p-4 bg-center bg-cover bg-no-repeat'>
        <div className='container sm:p-10 p-5 shadow-2xl rounded-lg opacity-100 bg-rgba'>
          <div>
            <div className='grid lg:grid-cols-2 grid-cols-1'>
              <div className='mx-auto lg:mx-0 w-64 sm:w-80'>
                <img
                  src={poster}
                  className='
                  rounded-lg
                  h-96
                  w-full
                  sm:h-single-image
                  border-4 border-light-hero
                '
                  alt={name}
                />
              </div>

              <div className='mx-auto lg:-ml-24 lg:mr-0 my-5 lg:my-0'>
                <h2
                  className='
                  text-4xl
                  sm:text-6xl
                  font-bold font-homenaje
                  tracking-widest
                  uppercase
                  sm:mt-0 sm:mb-4
                  mt-3
                  mb-6
                  text-hero
                '
                >
                  {name}
                  {remastered && (
                    <span
                      className='
                    inline-flex
                    text-lg
                    bg-gray-700
                    capitalize
                    font-normal
                    tracking-widest
                    sm:px-2 sm:py-1
                    px-1
                    py-0
                    rounded-md
                  '
                    >
                      remastered
                    </span>
                  )}
                </h2>
                <p
                  className='
                  font-roboto
                  text-gray-300
                  tracking-wider
                  font-bold
                  sm:text-3xl
                  text-xl
                  sm:mb-5
                  mb-6
                '
                >
                  {release_date}
                </p>
                <div
                  className='
                  font-roboto
                  capitalize
                  font-bold
                  tracking-wider
                  text-lighter-hero
                  sm:text-base
                  text-sm
                '
                >
                  <p className='my-1'>
                    genre :
                    <span
                      className='
                      text-light
                      sm:text-base
                      text-sm
                      font-normal
                      normal-case
                    '
                    >
                      {genre}
                    </span>
                  </p>
                  <p className='my-1'>
                    developer :
                    <span
                      className='
                      text-light
                      sm:text-base
                      text-sm
                      font-normal
                      normal-case
                    '
                    >
                      {`${developer},  `}
                    </span>
                  </p>
                  <p className='my-1'>
                    engine :
                    <span
                      className='
                      text-light
                      sm:text-base
                      text-sm
                      font-normal
                      normal-case
                    '
                    >
                      {engine}
                    </span>
                  </p>
                  <p className='my-1'>
                    publisher :
                    <span
                      className='
                      text-light
                      sm:text-base
                      text-sm
                      font-normal
                      normal-case
                    '
                    >
                      {publisher}
                    </span>
                  </p>
                  <p className='my-1'>
                    composer :
                    <span
                      className='
                      text-light
                      sm:text-base
                      text-sm
                      font-normal
                      normal-case
                    '
                    >
                      {`${composer},  `}
                    </span>
                  </p>
                  <p className='my-1'>
                    ESRB Rating :
                    <span
                      className='
                      text-light
                      sm:text-base
                      text-sm
                      font-normal
                      normal-case
                    '
                    >
                      {ESRB_rating}
                    </span>
                  </p>
                  <p className='my-1'>
                    synopsis :
                    <span
                      className='
                      text-light
                      sm:text-base
                      text-sm
                      font-normal
                      normal-case
                      synopsis
                    '
                    >
                      {synopsis}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className='w-full sm:my-6 my-0 py-5'>
              <p
                className='
                font-roboto
                capitalize
                font-bold
                tracking-widest
                text-lighter-hero
                sm:text-xl
                text-lg
              '
              >
                Platforms :{' '}
                <span className='text-gray-800'>{`${platforms} ,`}</span>
              </p>
              <p
                className='
                font-homenaje
                capitalize
                font-bold
                tracking-widest
                text-gray-600
                sm:text-base
                text-sm
                pt-8
                flex
                justify-around
                items-center
              '
              >
                <a
                  rel='noreferrer'
                  target='_blank'
                  href={trailer}
                  className='
                  bg-gray-800
                  rounded-lg
                  uppercase
                  inline-block
                  text-hero
                  sm:px-4 sm:py-2
                  px-2
                  py-1
                  sm:text-lg
                  text-sm
                  font-bold
                  hover:text-gray-800 hover:bg-hero
                  transition-colors
                  duration-700
                  ease-out
                '
                >
                  <i className='fab fa-youtube'></i> trailer
                </a>
                <a
                  rel='noreferrer'
                  target='_blank'
                  href={website}
                  className='
                  bg-gray-800
                  rounded-lg
                  uppercase
                  inline-block
                  text-hero
                  sm:px-4 sm:py-2
                  hover:text-gray-800 hover:bg-hero
                  px-2
                  py-1
                  sm:text-lg
                  font-bold
                  transition-colors
                  duration-700
                  ease-out
                  text-sm
                '
                >
                  <i className='fas fa-globe'></i> Website
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default SingleGamePage;
