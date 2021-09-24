const {accessToken,generatToken}=require('./auth/jwt') 
 const express=require('express')
const app=express();
app.use(express.json())

const ld=require('./router/ld');
const home =require('./router/router');
const blog=require('./router/blog')

app.use('/ld',ld)
app.use('/home',home)
app.use('/blog',blog)
app.listen(2033,()=>{
    console.log("running.....")
})
