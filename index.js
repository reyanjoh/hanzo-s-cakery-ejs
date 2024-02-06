const express = require('express');
const app = express();
const path = require('path');

const ejs = require('ejs');

const port = 3000;

const homePageRoutes = require('./routes/pagesRoutes/home')

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.set('views', path.join(__dirname, 'views'));



app.use('/', homePageRoutes)
app.get('*', (req, res) => {
    res.send('404 Page not found')
})

app.listen(port, () =>{
    console.log(`started @ https://localhost:${port}`);
})