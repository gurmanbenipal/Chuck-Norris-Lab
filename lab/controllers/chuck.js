const fetch = require('node-fetch');
const jokeURL = 'https://api.chucknorris.io/jokes/random';

module.exports = {
    index
};

function index(req, res) {
    fetch(jokeURL)
      .then(res => res.json())
      .then(joke => {
        res.render('index', { joke: joke.value });
      });
  }
  