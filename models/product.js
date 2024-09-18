const Sequelize=require('sequelize')

const sequelize =require('../util/database')
const Product=sequelize.define('ProductV2',{

    productId :{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },

    productName:Sequelize.STRING,
    brandName:Sequelize.STRING,
    productImageURL:Sequelize.STRING,
    productImageName:Sequelize.STRING,
    description:Sequelize.STRING,
    currencyCode:Sequelize.STRING,
    currency:Sequelize.STRING,
    saleAmount:Sequelize.INTEGER,
    brochureFileName:Sequelize.STRING,
    vendors:Sequelize.STRING,
    status:Sequelize.STRING,
    createdBy:Sequelize.STRING,
    createdAt:Sequelize.DATE,
    updatedAt:Sequelize.DATE,
    subCategoryId:Sequelize.INTEGER,
    categoryId:Sequelize.INTEGER,
    uomId:Sequelize.STRING,
    shippingMethodId:Sequelize.STRING,
    subCategoryName:Sequelize.STRING,
    categoryName:Sequelize.STRING,
    paymentTermsId:Sequelize.INTEGER,
    shippingTermsId:Sequelize.INTEGER,
    shippingMethodId:Sequelize.STRING,
    uomDescription:Sequelize.STRING,
    uomCode:Sequelize.STRING,
    subCategoryName:Sequelize.STRING,
    vendors:Sequelize.STRING,
    organisationId:Sequelize.INTEGER,
    organisationName:Sequelize.STRING,
})

module.exports=Product
