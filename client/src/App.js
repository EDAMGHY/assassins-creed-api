import React from 'react';
import Home from './pages/Home';
import Docs from './pages/Docs';
import Games from './pages/Games';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Top from './components/TopButton';
import SingleGamePage from './pages/SingleGamePage';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [current, setCurrent] = React.useState('');
  const [gameCurrent, setGameCurrent] = React.useState('');
  const [games, setGames] = React.useState([]);
  const [singleGame, setSingleGame] = React.useState({});

  const fetchData = async () => {
    const res = await fetch('/api/v1/games');
    const data = await res.json();
    setGames(data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <Top />
      <Navbar current={current} />
      <Routes>
        <Route exact path='/' element={<Home setCurrent={setCurrent} />} />
        <Route
          exact
          path='/games'
          element={
            <Games games={games} current={current} setCurrent={setCurrent} />
          }
        />
        <Route
          exact
          path='/games/:id'
          element={
            <SingleGamePage
              gameCurrent={gameCurrent}
              setGameCurrent={setGameCurrent}
              singleGame={singleGame}
              setSingleGame={setSingleGame}
              current={current}
              setCurrent={setCurrent}
            />
          }
        />
        <Route
          exact
          path='/docs'
          element={<Docs current={current} setCurrent={setCurrent} />}
        />
        <Route exact path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
