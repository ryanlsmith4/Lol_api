const router = require('express').Router();

const { getIndex, getChampInfo, getFeaturedGames } = require('../controllers/lol_handler');

router.route('/league')
  .get(getIndex)
  .post(getChampInfo);

router.route('/league/featured')
  .get(getFeaturedGames);

module.exports = router;
