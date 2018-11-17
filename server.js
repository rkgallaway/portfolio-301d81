'use strict';
//Load express
const express = require('express');

//Instantiate Express so that we can use it
const app = express();
//app the $ for express

//Designate a port to serve our app on
const PORT = 3000;
//Define which directory that we will serve files from
app.use(express.static('./public'));

//Tell the app to listen so that we will serve files from
app.listen(PORT, () => console.log(`Our app is listening on port ${PORT}`))
