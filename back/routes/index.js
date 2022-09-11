var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.status(200);
  res.json('Connected 200');
});
router.post('/', function (req, res) {
  res.sendStatus(200);
  //console.log(res.data)
})

module.exports = router;
