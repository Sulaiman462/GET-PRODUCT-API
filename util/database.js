const Sequelize=require('sequelize')
const mysql = require('mysql2')
const sequelize=new Sequelize('conqtvms_dev','candidate','NoTeDeSt^C10.6?SxwY882}',{
    dialect:'mysql',
    host:'nodejs-technical-test.cm30rlobuoic.ap-southeast-1.rds.amazonaws.com'
});

module.exports=sequelize