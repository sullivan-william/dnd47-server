const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users/users', { title: 'Users' });
});

module.exports = router;