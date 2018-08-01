const express = require('express');
const path = require('path');
const app = express();


app.use('/assets',express.static('./assets'))
app.use(express.static('./views'))


app.listen(3000, () => {
    console.log('http://127.0.0.1:3000')
})