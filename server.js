const express = require('express');
const app = express();
const port = 3000;

require('./src/api/hello')(app);

app.listen(port, () => console.log(`server has started at ${port}`));