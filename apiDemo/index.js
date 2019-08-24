const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const databaseUrl = 'mongodb://admin:admin123@ds127938.mlab.com:27938/doctorai_admin';

// Importing Routers
const productRouter = require('./Routers/productRouter');


const connectMongodb = () =>{
    mongoose.connect(databaseUrl,{useNewUrlParser:true},(err)=>{
        if(err){
            console.log('Server is Not Running...')
        }
    })
    return true;
}
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors())
app.use('/product',productRouter);

const PORT = 5000;
app.listen(PORT,(err)=>{
    if(!err){
        if(connectMongodb()){
            console.log('Server is Running....');
        }
    }
})