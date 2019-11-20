module.exports = app =>{
    const express = require("express")
    const router = express.Router
    const Category =require('../../models/Category')
    // router.post('/categories',async(req,res)=>{
    //     // Category
    // })
    app.use('/admin/api', router)
}