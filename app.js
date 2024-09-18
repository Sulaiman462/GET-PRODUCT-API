const express = require('express');
const app=express();
const bodyParser = require('body-parser');
var cors=require('cors')
app.use(cors());
app.use(bodyParser.json());

const adminRoute= require('./routes/admin')
const sequelize= require('./util/database')
app.use(adminRoute)
const Product = require('./models/product')


sequelize
.sync()
.then(result=>{
    app.listen(2000)
    console.log("App is listening on port 2000")

})
.catch(err=>{
    console.log(err)
})




