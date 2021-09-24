const express=require('express');
const {accessToken,generatToken}=require('../auth/jwt') 
const knex=require('../database/db');
const app=express();
const router=express.Router();
const jwt=require("jsonwebtoken");

router.get('/home',(req,res)=>{
    res.send("here is blogs")
})

router.post('/blog',accessToken,(req,res)=>{   
    const like1={
        title:req.body.title,
        author:req.body.author,
        description:req.body.description
    }
    knex('likedishlike').insert(like1).then((data)=>{
        res.send({"data":"insert"})})
    })

module.exports=router

