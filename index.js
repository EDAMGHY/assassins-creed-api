const express = require('express');
const data = require('./data/assassinsCreed.json');
const games = require('./routes/creed');
const app = express();
const path = require('path');

app.use(express.json());

app.use('/api/v1/games', games);

// app.get('/', (req, res) => {
//   res.send('<h1>It work!</h1>');
// });

if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
