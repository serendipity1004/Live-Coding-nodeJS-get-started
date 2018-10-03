const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({answer: 'hello world'});
});

app.listen(port, () => console.log(`server has started at ${port}`));