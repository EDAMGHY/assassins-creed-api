import React, { Fragment } from 'react';
import Header from '../components/Header';
import GamesHero from '../components/GamesHero';
import GamesComponent from '../components/Games';

const Games = ({ games, setGames, current, setCurrent }) => {
  React.useEffect(() => {
    document.title = 'Games';
    setCurrent(document.title.toLowerCase());
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <Header current={current} />
      <GamesHero />
      <GamesComponent games={games} />
    </Fragment>
  );
};

export default Games;
