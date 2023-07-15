const express = require('express');
const router = express.Router();

/* GET characters listing */
router.get('/', function(req, res, next) {
    res.render('characters/characters', { title: 'Characters' });
});

module.exports = router;