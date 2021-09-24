const express=require('express');
const {accessToken,generatToken}=require('../auth/jwt') 
const knex=require('../database/db');
const app=express();
const router=express.Router();
const jwt=require("jsonwebtoken"); 

router.get('/home1',(req,res)=>{
    res.send("nkjsd")
})

router.post('/like',accessToken,(req,res)=>{   
    const like1={
        like:req.body.like,
        dishlike:false,
        userid:req.body.userid
    }
    knex('likedishlike').insert(like1).then((data)=>{
        res.send({"data":"insert"})})
    })

router.post('/dishlike',accessToken,(req,res)=>{   
    const like1={
        like:false,
        dishlike:req.body.dishlike,
        userid:req.body.userid
    }
    knex('likedishlike').insert(like1).then((data)=>{
        res.send({"data":"insert"})})
    })

module.exports=router

