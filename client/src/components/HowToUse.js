import React from 'react';

const HowToUse = () => {
  return (
    <section className='h-auto bg-extra-dark'>
      <div className='container'>
        <div className='container-2 w-full my-7'>
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
            How to use
          </h1>
          <div className='w-28 mx-auto sm:mx-0 rounded sm:h-under h-1 bg-darken mb-5'></div>
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
            You can use The Assassin's Creed API General Endpoints as the main
            endpoint for your application (You can find more endpoints{' '}
            <a href='docs.html' className='underline'>
              Here
            </a>{' '}
            ). And then you can either <code>Async/Await</code> keywords Or you
            can use
            <code>.then</code> method.
          </p>
          <div className='flex justify-center items-center'>
            <div className='bg-gray-900 rounded-lg py-1 sm:px-28 px-3 text-white mt-8'>
              <pre className='sm:text-sm text-xs py-5'>
                <div className='codeHow-1 '>
                  const <span className='text-varColor'>url</span> ={' '}
                  <span className='text-greenText underline'>
                    <br />
                    'https://react-assassins-creed.herokuapp.com/api/v1/games'
                  </span>
                </div>
                <div className='codeHow-2 '>
                  const <span className='text-varColor'>url</span> ={' '}
                  <span className='text-greenText underline'>
                    <br />
                    'https://react-assassins-creed <br />
                    .herokuapp.com/api/v1/games'
                  </span>
                </div>
                ;<br />
                <br />
                <span className='text-keyColor'>async</span>{' '}
                <span className='text-keyColor'>function</span>{' '}
                <span className='text-yellowFunc'>fetchDataAsync</span>() &#123;{' '}
                <br />
                &nbsp;&nbsp;const <span className='text-varColor'>
                  res
                </span> = <span className='text-keyColor'>await</span>{' '}
                <span className='text-yellowFunc'>fetch</span>(
                <span className='text-varColor'>url</span>); <br />
                &nbsp;&nbsp;const <span className='text-varColor'>
                  data
                </span> = <span className='text-keyColor'>await</span>{' '}
                <span className='text-orangeColor'>res</span>.json(); <br />
                &nbsp;&nbsp;<span className='text-orangeColor'>console</span>
                .log(
                <span className='text-varColor'>data</span>); <br />
                &#125;
                <br />
                <br />
                <div className='text-darken m-0 p-0 inline'> OR</div> <br />
                <br />
                <span className='text-keyColor'>function</span>{' '}
                <span className='text-yellowFunc'>fetchDataThen</span>() &#123;
                <br />
                &nbsp;&nbsp;<span className='text-yellowFunc'>fetch</span>(
                <span className='text-varColor'>url</span>) <br />
                &nbsp;&nbsp;&nbsp;&nbsp; .then((
                <span className='text-varColor'>res</span>) =&gt;{' '}
                <span className='text-orangeColor'>res</span>.json()) <br />
                &nbsp;&nbsp;&nbsp;&nbsp; .then((
                <span className='text-varColor'>data</span>) =&gt;{' '}
                <span className='text-orangeColor'>console</span>.log(
                <span className='text-varColor'>data</span>)) <br />
                &nbsp;&nbsp;&nbsp;&nbsp; .catch((
                <span className='text-varColor'>err</span>) =&gt;{' '}
                <span className='text-orangeColor'>console</span>.error(
                <span className='text-varColor'>err</span>)); <br />
                &#125;
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
