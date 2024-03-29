const express=require('express')
const colors=require('colors')
const cors=require('cors')
const morgan=require('morgan')
const  connectDB = require('./config/db.js')
const authRoutes=require('./route/authRoute.js')
const cateRoute=require('./route/categories.js')
const productroute=require('./route/productRoute.js')
const path=require('path')
 
connectDB()
const app=express()
 app.get('/',(req,res)=>{
    res.send("hi i am from server")
 })

//  middlewere
 app.use(cors());
 app.use(express.json());
 app.use(morgan("dev"));


 app.use(express.static(path.join(__dirname,'../client/client/dist')))

 app.get('*',function(req,res){
    res.sendFile(path.join(__dirname,'../client/client/dist/index.html'))
 })
 //route

 app.use("/api/v1/auth", authRoutes);
 app.use("/api/v1/cate", cateRoute);
 app.use("/api/v1/product", productroute);
 
app.listen(8080,()=>{
    console.log("server is runnig on port number 8080")
})