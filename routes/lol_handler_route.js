const router = require('express').Router();

const getChampInfo = require('../controllers/lol_handler');

router.route('/league')
  .post(getChampInfo);

module.exports = router;
