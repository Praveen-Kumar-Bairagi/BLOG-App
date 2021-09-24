const express=require('express');
const {accessToken,generatToken}=require('../auth/jwt') 
const knex=require('../database/db');
const app=express();
const router=express.Router();
const jwt=require("jsonwebtoken")

router.get('/home',(req,res)=>{
    res.send("this is your home page")
})

/////////////////////signup///////////////////

router.post('/signup',(req,res)=>{
    knex.select('*').from('information').where('email',req.body.email).then((data)=>{
        if(data.length<1){
            const userdata={
                id:req.body.id,
                name:req.body.name,
                email: req.body.email,
                password:(req.body.password)
            }
            knex('information').insert(userdata).thenPOST((data)=>{
                res.send({"data":"insert"})}
            )}
        else{
            res.send("data already exits you can login")
        }
    })
})
////////////////////////logoin///////////

router.get('/login',(req,res)=>{
    knex.select('*').from('information').where('email',req.body.email).then((data)=>{
        if((data <1)){
            res.send("1st signup")
        }else if (data[0].password!== req.body.password){
            res.send("you input wrong password ")
        }else{
            const token=generatToken(req.body.email)
            res.cookie('token',token)
            res.send("login succed")
               
        }
    })
})



module.exports=router;