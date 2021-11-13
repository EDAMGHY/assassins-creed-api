const express = require('express');
const data = require('../data/assassinsCreed.json');
const router = express.Router();

// GET All GAMES AND  BY ENGINE / REMASTERED / YEAR / DEVELOPER QUERY PARAMS
router.get('/', (req, res) => {
  const { engine, remastered, year, developer, platform, composer, sort } =
    req.query;
  let sortedData = [...data];
  if (engine) {
    sortedData = sortedData.filter((game) => {
      return game.engine.toLowerCase() === engine.toLowerCase();
    });
  }
  if (remastered) {
    sortedData = sortedData.filter((game) => {
      return `${game.remastered}` === remastered;
    });
  }
  if (year) {
    sortedData = data.filter((game) => {
      return new Date(game.release_date).getFullYear() === +year;
    });
  }
  if (developer) {
    sortedData = sortedData.filter((game) => {
      return game.developer.includes(developer);
    });
  }
  if (platform) {
    sortedData = sortedData.filter((game) => {
      return game.platforms.includes(platform);
    });
  }
  if (composer) {
    sortedData = sortedData.filter((game) => {
      return game.composer.includes(composer);
    });
  }
  if (sort) {
    sortedData = data.sort((a, b) => {
      if (sort === 'asc') {
        return (
          new Date(a.release_date).getFullYear() -
          new Date(b.release_date).getFullYear()
        );
      }
      if (sort === 'desc') {
        return (
          new Date(b.release_date).getFullYear() -
          new Date(a.release_date).getFullYear()
        );
      }
    });
  }

  if (sortedData.length < 1) {
    return res
      .status(404)
      .json({ success: true, message: 'no games matched your search' });
  }

  try {
    res.status(200).json(sortedData);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET SINGLE GAME ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  const singleGame = data.find((game) => game.id === +id);
  if (!singleGame) {
    return res
      .status(404)
      .json({ success: true, message: 'no games matched your id' });
  }
  try {
    res.status(200).json(singleGame);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// GET GAME BY NAME
router.get('/game/:name', (req, res) => {
  const { name } = req.params;
  const newName = splitJoin(name);
  const singleGame = data.find((game) => splitJoin(game.name) === newName);
  if (!singleGame) {
    return res
      .status(404)
      .json({ success: true, message: 'no games matched your name' });
  }
  try {
    res.status(200).json(singleGame);
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

// functions
// const errorHandling = (response, condition, msg) => {
//   if (condition) {
//     return response.status(200).json({ success: true, message: msg });
//   }
// };
const splitJoin = (item) => {
  return item.toLowerCase().split(/'| /).join('');
};

module.exports = router;
