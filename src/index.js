const express = require('express');
const app = express();
let CORS = require('cors');
const bodyparser = require('body-parser');


app.use(CORS());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

app.use(require('../routes/correoRoutes.js'));

app.listen(process.env.PORT || 3000,()=> {
    console.log('Server inciiado en el puerto 3000');
});

