

const  JWT =require("jsonwebtoken");
const Usermodel = require("../model/Usermodel");

 const requireSignIn=(req,res,next)=>{
    try {
        const decode = JWT.verify(
          req.headers.authorization,
          'hi it dummy secretkey'
        );
        req.user = decode;
        // console.log(req.user)
        next();
      } catch (error) { 
        console.log(error);
      }
    };
    

 const isAdmin=async(req,res,next)=>{
    try {
        const user = await Usermodel.findById(req.user.id);
        // console.log(user)
        if (user.role !== 1) {
          return res.status(401).send({
            success: false,
            message: "UnAuthorized Access",
          });
        } else {
          next();
        }
      } catch (error) {
        console.log(error);
        res.status(401).send({
          success: false,
          error,
          message: "Error in admin middelware",
        });
      }
    };

    module.exports={isAdmin,requireSignIn}