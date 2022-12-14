const express = require('express');
const users = require('./routers/usuarios.js');
const home = require('./routers/home.js');
const cors = require('cors');
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    app.use(cors());
    next();
});
app.use(express.static(__dirname+'/public'));
app.use('/usuarios',users);
app.use('/',home);

app.listen(3000, ()=>{
    console.log("SERVIDOR ON!")
})