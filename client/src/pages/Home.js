import React from 'react';
import Hero from '../components/Hero';
import Results from '../components/Results';
import HowToUse from '../components/HowToUse';
const Home = ({ setCurrent }) => {
  React.useEffect(() => {
    document.title = 'Home';
    setCurrent(document.title.toLowerCase());
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <Hero />
      <HowToUse />
      <Results />
    </>
  );
};

export default Home;
