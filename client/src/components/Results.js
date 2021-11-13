import React from 'react';

const Results = () => {
  return (
    <section className='h-auto bg-extra-dark'>
      <div className='container'>
        <div className='container-2 w-full sm:my-7 my-0'>
          <h1
            className='
              sm:text-4xl
              text-2xl
              sm:my-3
              mb-2
              text-hero
              font-bold font-homenaje
              tracking-widest
              uppercase
              sm:text-left
              text-center
            '
          >
            Results
          </h1>
          <div
            className='
              sm:w-28
              w-16
              mx-auto
              sm:mx-0
              rounded
              sm:h-under
              h-1
              bg-darken
              mb-5
            '
          ></div>
          <p
            className='
              text-light-hero
              lg:text-base
              text-sm
              font-medium
              mb-6
              sm:text-left
              text-center
            '
          >
            The Application will provide you with JSON object that you can parse
            and apply to your application. <br />
          </p>
          <div className='flex justify-center items-center'>
            <div
              className='
                bg-gray-900
                rounded-lg
                py-1
                sm:px-12
                px-3
                w-full
                text-white
                mt-6
              '
            >
              <pre
                className='
                  sm:text-sm
                  text-xs
                  overflow-x-scroll
                  scroll-bar
                  sm:my-10
                  my-4 pb-4
                '
              >
                <code>
                  &#123; <br /> <br />
                  &nbsp;&nbsp; "id": <span className='text-orangeColor'>1</span>
                  , <br />
                  &nbsp;&nbsp; "name":{' '}
                  <span className='text-greenText'>"Assassin's Creed"</span>
                  , <br />
                  &nbsp;&nbsp; "genre":{' '}
                  <span className='text-greenText'>
                    "Action-Adventure"
                  </span>, <br />
                  &nbsp;&nbsp; "remastered":{' '}
                  <span className='text-orangeColor'>false</span>, <br />
                  &nbsp;&nbsp; "poster":{' '}
                  <span className='text-greenText'>
                    "https://i.ibb.co/gtFF78Q/ac1.jpg"
                  </span>
                  , <br />
                  &nbsp;&nbsp; "synopsis":{' '}
                  <span className='text-greenText'>
                    "Desmond Miles, a bartender, is kidnapped by the company
                    Abstergo Industries for use as a test subject in the
                    'Animus,' a device that can simulate genetic memory.
                    Abstergo intends to put Desmond in the device to recall the
                    memories of his ancestor, Altaïr Ibn-La'Ahad, a member of
                    the Assassin Brotherhood in the year 1191, who lived during
                    the Third Crusade in the Holy Land."
                  </span>
                  , <br /> &nbsp;&nbsp;"developer": [
                  <span className='text-greenText'>"Ubisoft Montreal"</span>],{' '}
                  <br />
                  &nbsp;&nbsp; "release_date":{' '}
                  <span className='text-greenText'>
                    "November 13, 2007"
                  </span>, <br />
                  &nbsp;&nbsp; "publisher":{' '}
                  <span className='text-greenText'>"Ubisoft"</span>, <br />
                  &nbsp;&nbsp; "engine":{' '}
                  <span className='text-greenText'>"Scimitar"</span>, <br />
                  &nbsp;&nbsp; "composer": [
                  <span className='text-greenText'>"Jesper Kyd"</span>
                  ], <br /> &nbsp;&nbsp;"ESRB_rating":{' '}
                  <span className='text-greenText'>"M (Mature)"</span>, <br />
                  &nbsp;&nbsp; "platforms": [ <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='text-greenText'>"PlayStation 3"</span>,{' '}
                  <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='text-greenText'>"Xbox 360"</span>, <br />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className='text-greenText'>"Microsoft Windows"</span>
                  <br />{' '}
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  ], <br />
                  &nbsp;&nbsp; "trailer":
                  <span className='text-greenText'>
                    "https://www.youtube.com/watch?v=RjQ6ZtyXoA0"
                  </span>
                  , <br /> &nbsp;&nbsp;"website":
                  <span className='text-greenText'>
                    "https://www.ubisoft.com/en-us/game/assassins-creed/assassins-creed"
                  </span>
                  , <br /> <br />
                  &#125;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;
