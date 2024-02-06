const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('./pages/home.ejs');
})

router.get('/home', (req, res) => {
    res.redirect('/');
})

router.get('/index', (req, res) => {
    res.redirect('/');
})

router.get('/index.html', (req, res) => {
    res.redirect('/');
})

module.exports = router;