import React, { Fragment } from 'react';
import SideNav from '../components/SideNav';
import DocsInfo from '../components/DocsInfo';
import Header from '../components/Header';

const Docs = ({ current, setCurrent }) => {
  React.useEffect(() => {
    document.title = 'Docs';
    setCurrent(document.title.toLowerCase());
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Header current={current} />
      <section className='bg-gray-100'>
        <div className='container py-8 px-2'>
          <div className='flex justify-center items-center sm:flex-row flex-col'>
            <SideNav />
            <DocsInfo />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Docs;
