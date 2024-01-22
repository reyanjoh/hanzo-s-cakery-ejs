const express = require('express');
const app = express();
const path = require('path');

const ejs = require('ejs');

const port = 3000;

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('./pages/home.ejs')
})

app.listen(port, () =>{
    console.log(`started @ https://localhost:${port}`);
})