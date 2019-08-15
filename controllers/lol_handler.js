const { LOL_API_KEY } = process.env;
const BASE = 'https://na1.api.riotgames.com';

const request = require('request');

const getChampInfo = (req, res) => {
  const summonerName = req.body.summoner;
  const champUrl = `${BASE}/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${LOL_API_KEY}`;

  request(champUrl, (err, response, body) => {
    if (err) {
      res.render('index', { summoner: null, error: 'Error, please try again' });
    } else {
      const summonerInfo = JSON.parse(body);
      res.render('index', { summoner: summonerInfo.name, level: summonerInfo.summonerLevel });
    }
  });
};

module.exports = getChampInfo;
