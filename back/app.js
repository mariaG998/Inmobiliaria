//invocamos a express
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sql = require('./database/sql');
const app = express();

//sql.testConnection();

//seteamos urlencoded para capturar los datos del formulario
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//invocamos a dotenv
const dotenv=require('dotenv');
dotenv.config({path:'./env/.env'});

//el directorio public
app.use('/resources',express.static('public')); //imagenes,css
app.use('/resources',express.static(__dirname + '/public'));

//establecer el motor de plantillas ejs
app.set('view engine','ejs');

//invocamos a bcryptjs para el hashing 
const bcryptjs=require('bcryptjs');

//variable de session 
const session= require('express-session');
app.use(session({
    secret:'secret',
    resave:true,
    saveUninitialized:true
}));

app.use(bodyParser.json({limit:'100mb'}));
app.use(bodyParser.urlencoded({
    extended:true,
    limit:'100mb'
}));

app.use(cors());

app.all( '*', function ( req , res , next )
{
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','PUT,GET,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

app.get('/users', ( req , res )=>
{
    let q = 'SELECT * FROM login';
    sql.mydbPool ( req , res, q )
});

app.listen ( 30000 ,( req , res ) => 
{
    console.log('Server running in http://localhost:30000');
})





