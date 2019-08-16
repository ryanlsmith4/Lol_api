const { LOL_API_KEY } = process.env;
const BASE = 'https://na1.api.riotgames.com';

const request = require('request');

const getIndex = (req, res) => { res.render('index'); };
const getChampInfo = (req, res) => {
  const summonerName = req.body.summoner;
  const champUrl = `${BASE}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${LOL_API_KEY}`;

  request(champUrl, (err, response, body) => {
    if (err) {
      res.render('index', { summoner: null, error: 'Summoner name incorrect please try again' });
    } else {
      const summonerInfo = JSON.parse(body);
      console.log(typeof summonerInfo.status.status_code)
      console.log(summonerInfo)
      console.log('what')
      res.render('index', { summoner: summonerInfo.name, level: summonerInfo.summonerLevel });
    }
  });
};

const getFeaturedGames = (req, res) => {
  const featuredGames = `${BASE}/lol/spectator/v4/featured-games?api_key=${LOL_API_KEY}`;

  request(featuredGames, (err, response, body) => {
    if (err) {
      res.render('index', { summoner: null, error: 'Error, please try again' });
    } else {
      const gamesInfo = JSON.parse(body);
      const firstFeatGamePart = gamesInfo.gameList[0].participants;
      const playersList = [];
      for (let i = 0; i < firstFeatGamePart.length; i += 1) {
        playersList.push(firstFeatGamePart[i].summonerName);
      }
      res.render('featuredGame', { player: playersList });
    }
  });
};

module.exports = {
  getIndex,
  getChampInfo,
  getFeaturedGames,
};
