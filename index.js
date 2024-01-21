const express = require('express');
const app = express();

const ejs = require('ejs');

const port = 3000;

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('pages/home')
})

app.listen(port, () =>{
    console.log(`started @ https://localhost:${port}`);
})