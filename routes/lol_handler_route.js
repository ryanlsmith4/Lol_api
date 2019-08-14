const router = require('express').Router()

const getChampInfo = require('../controllers/lol_handler');

router.route('/league')
  .get(getChampInfo);

module.exports = router;