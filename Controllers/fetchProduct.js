const { response } = require('express');
const path =require('path')
const rootDir = require('../util/path');
const Product = require('../models/product');
const Op = require('sequelize')

exports.getProduct = async (req, res, next) => {

const {
    pageSize = 10,
     currentPage =  1,
     orderBy =  'createdAt',
     orderDir =  'desc',
     searchBy =  "",
     searchFields =  []
} = req?.query;


const offset = (currentPage - 1) * pageSize
try {
    const whereConition = {};
    if(searchBy && searchFields.length > 0){
        whereConition[Op.or] = searchFields.map(field =>({
                        [field] : 
                 `${searchBy}`
            
        })
        )}
    
        console.log("whereConition",JSON.stringify(whereConition))
    const {count, rows} = await Product.findAndCountAll({
        where: whereConition,
        order :[orderBy,orderDir],
        limit :parseInt(pageSize),
        offset:parseInt(offset)
    });

    const totalPages = Math.ceil(count / pageSize);
    return res.status(200).json({
        currentPage:parseInt(currentPage),
        pageSize:parseInt(pageSize),
        totalPages,
        totalCount:count,
        data:rows
})



} catch (error) {
    console.log("ERROR: ",error);
    return res.status(500).json({message:"Server Error",error})
}



}