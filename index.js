const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Thank You for Calling me');
})

app.listen(4200, () => console.log('listentning to port 30000'));